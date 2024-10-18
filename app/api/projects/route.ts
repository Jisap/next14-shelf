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

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const projectId = url.searchParams.get("projectId");

    if( !projectId ) {
      return NextResponse.json(
        {message: "project id is required"},
        { status: 400 }
      );
    }

    const projectToDelete = await Project.findOneAndDelete({ _id: projectId });
    if(!projectToDelete){
      return NextResponse.json(
        {message: "project not found"},
        { status: 404 }
      )
    }

    return NextResponse.json({ message: "project deleted successfully" });

  } catch (error) {
    console.log(error);
    console.error("Error deleting project", error);
    return NextResponse.json(
      { error: error }, 
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    const projectId = url.searchParams.get("projectId");
    const { name, icon } = await request.json();

    if(!projectId){
      return NextResponse.json(
        {message: "Project ID is required"},
        { status: 400 }
      );
    }

    await connect();

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { name, icon},
      { new: true}
    );

    if(!updatedProject){
      return NextResponse.json(
        {message: "Project not found"},
        { status: 404 }
      );
    }

    return NextResponse.json({ project: updatedProject});

  } catch (error) {
    console.error("Error updating project", error);
    return NextResponse.json(
      { error: "Failed to update project" }, 
      { status: 500 }
    );
  }
}