"use server"

import { EmailAddress, WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

import User from "@/app/Models/UserSchema";
import connect from "@/app/lib/connects";


export async function POST(req: Request) {                                          // Función principal para manejar las solicitudes POST al endpoint

  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;                                // Obtener la clave secreta del webhook desde las variables de entorno

  if (!WEBHOOK_SECRET) {                                                            // Verificar si la clave secreta del webhook está definida
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();                                                  // Obtener los headers necesarios para la verificación del webhook
  const svix_id = headerPayload.get("svix-id")
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {                             // Verificar si todos los headers necesarios están presentes
    return new Response("Error occured -- no svix headers", { status: 400})
  }

  const payload = await req.json();                                                 // Obtener y preparar el payload del cuerpo de la solicitud
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);                                           // Crear una instancia de Webhook para verificación

  let evt: WebhookEvent;

  try {                         
    
    evt = wh.verify(body, {                                                         // Verificar la autenticidad del webhook
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent

  } catch (error) {
    console.error("Error verifying webhook:", error);
    return new Response("Error occured", { status: 400 })
  }

  const { id } = evt.data;                                                          // Extraer información relevante del evento
  const eventType = evt.type;

  if (eventType === "user.created") {                                               // Manejar el evento de creación de usuario
    const { id, email_addresses } = evt.data

    const newUser = {                                                               // Preparar datos del nuevo usuario
      clerkUserId: id,
      EmailAddress: email_addresses[0].email_address,
    };

    try {
      await connect();                                                              // Conectar a la base de datos y crear el nuevo usuario
      await User.create(newUser)
      console.log("user created");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
      
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);             // Registrar información sobre el webhook procesado
  console.log("Webhook body:", body);

  return new Response("", { status: 200 })                                          // Responder con éxito
    
}