

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
  console.log(`Processing webhook: ${eventType}`);


  if (eventType === "user.created") {                                               // Manejar el evento de creación de usuario
    const { id, email_addresses } = evt.data
    console.log(`New user created with ID: ${id}`); 

    if (!email_addresses || email_addresses.length === 0) {
      console.error("No email addresses provided for the user");
      return new Response("Error: No email address available", { status: 400 });
    }

    const newUser = {                                                               // Preparar datos del nuevo usuario
      clerkUserId: id,
      emailAddress: email_addresses[0].email_address,
    };

    console.log("Attempting to create user:", JSON.stringify(newUser))

    try {
      await connect();                                                              // Conectar a la base de datos y crear el nuevo usuario
      console.log("Database connected successfully");
      
      const createdUser = await User.create(newUser)
      console.log("User created in database:", JSON.stringify(createdUser));
      
      const foundUser = await User.findOne({ clerkUserId: id });
      if (foundUser) {
        console.log("User verified in database:", JSON.stringify(foundUser));
      } else {
        console.error("User not found in database after creation");
      }
      
    } catch (error) {
      console.error("Error creating user in database:", error);
      if (error instanceof Error) {
        return new Response(`Error creating user: ${error.message}`, { status: 500 });
      }
      return new Response("Unknown error occurred while creating user", { status: 500 });
    }
  }else{
    console.log(`Unhandled event type: ${eventType}`);
  }
      
  // console.log(`Webhook with and ID of ${id} and type of ${eventType}`);             // Registrar información sobre el webhook procesado
  // console.log("Webhook body:", body);

  console.log(`Webhook processed successfully for ID: ${id} and type: ${eventType}`);

  return new Response("Webhook processed", { status: 200 })                                       // Responder con éxito
    
}