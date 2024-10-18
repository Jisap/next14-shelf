import connect from "@/app/lib/connects";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import Project from "@/app/Models/ProjectSchema";




export async function POST(req: Request) { 
  try {
    const { name, icon, clerkUserId, components } = await req.json();  // Obtener y preparar el payload del cuerpo de la solicitud
    await connect();                                                   // Conexión a la bd
    const project = new Project({                                      // Creamos un nuevo proyecto
      id: uuidv4(),
      name,
      icon,
      clerkUserId,
      components: components.map((components:any) => ({
        _id: uuidv4(),
        name: components.name,
        projectName: name,
        code: components.code,
        isFavorite: components.isFavorite || false,
      })),
    });

    const savedProject = await project.save();                         // Guardamos el proyecto en la bd
    return NextResponse.json({ project: savedProject});                // Devolvemos el proyecto guardado
  
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, {status: 400});
  }
}   

export async function GET(req:any) {  // Función para obtener los projects pertenecientes a un usuario
  try {
    
    const clerkUserId = req.nextUrl.searchParams.get("clerkUserId");   
    await connect();    
    console.log(clerkUserId);
    const res = await Project.find({ clerkUserId });
    return NextResponse.json({ projects: res })

  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}