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
      components: components.map((component:any) => ({
        _id: uuidv4(),
        name: component.name,
        projectName: name,
        code: component.code,
        isFavorite: component.isFavorite || false,
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
    const componentId = url.searchParams.get("componentId");
    const { action, name, icon, component } = await request.json();

    if(!projectId){
      return NextResponse.json(
        {message: "Project ID is required"},
        { status: 400 }
      );
    }

    await connect();

    let updatedProject

    if(action === "addComponent"){                                   // Si queremos agregar un componente al proyecto
      updatedProject = await Project.findByIdAndUpdate(              // Buscamos en la tabla de proyectos el proyecto con el id especificado
        projectId,
        { $push: { components: component } },                        // Agregamos el componente al array de componentes del proyecto
        { new: true }                                                // Devolvemos el objeto actualizado
      ); 

    } else if (action === "updatedComponent"){                       // Si queremos actualizar un componente del proyecto
      if(!componentId){
        return NextResponse.json(
          {message: "Component ID is required for updating"},
          { status: 400 }
        );
      }
      
      updatedProject = await Project.findOneAndUpdate(               // Buscamos en la tabla de proyectos 
        {_id: projectId, "components._id": componentId},             // el proyecto con el id especificado y el componente con el id especificado
        { $set: { "components.$": component}},                       // Actualizamos el componente en el proyecto
        { new: true}                                                 // Devolvemos el objeto actualizado
      );

    } else if (action === "deleteComponent"){                        // Si queremos eliminar un componente del proyecto
      if(!componentId){
        return NextResponse.json(
          {message: "Component ID is required for deleting"},
          { status: 400 }
        );
      }

      updatedProject = await Project.findByIdAndUpdate(              // Buscamos en la tabla de proyectos
        projectId,                                                   // el proyecto con el id especificado
        { $pull: { components: { _id: componentId } } },             // Eliminamos el componente del array de componentes del proyecto
        { new: true }                                                // Devolvemos el objeto actualizado
      );

    }else{                                                          // Si no reconocemos la acción, actualizamos el nombre y el icono del proyecto
      updatedProject = await Project.findByIdAndUpdate(  
        projectId,
        { name, icon },
        { new: true }
      );
    }

    

  } catch (error) {
    console.error("Error updating project", error);
    return NextResponse.json(
      { error: "Failed to update project" }, 
      { status: 500 }
    );
  }
}