import { v4 as uuidv4 } from 'uuid';

export interface Component {
  _id:          string;
  name:         string;
  projectName:  string;
  code:         string;
  isFavorite:   boolean;
  createdAt:    string;
}

export interface Project {
  _id:          string;
  clerkUserId:  string;
  name:         string;
  icon:         string;
  createdAt:    string;
  components:   Component[];
}

export const allProjectsData: Project[] = [
  {
    _id: uuidv4(),
    clerkUserId: "",
    name: "Forms",
    icon: "CategoryIcon",
    createdAt: "2022-01-01T00:00:00.000Z",
    components: [
      {
        _id: uuidv4(),
        name: "Forms 1",
        projectName: "Forms",
        code: `
          <div className="p-4 bg-blue-100 rounded-lg">
            <h1 className="text-2xl font-bold text-blue-700">Hello, Tailwind!</h1>
            <p className="mt-2 text-gray-600">Edit this code.</p>
          </div>  
          `,
        isFavorite: false,
        createdAt: "2022-01-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Forms 2",
        projectName: "Forms",
        code: `
          <div className="p-4 bg-blue-100 rounded-lg">
            <h1 className="text-2xl font-bold text-blue-700">Hello, Tailwind!</h1>
            <p className="mt-2 text-gray-600">Edit this code.</p>
          </div>  
        `,
        isFavorite: true,
        createdAt: "2022-02-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Forms 3",
        projectName: "Forms",
        code: `
          <div className="p-4 bg-blue-100 rounded-lg">
            <h1 className="text-2xl font-bold text-blue-700">Hello, Tailwind!</h1>
            <p className="mt-2 text-gray-600">Edit this code.</p>
          </div>  
        `,
        isFavorite: true,
        createdAt: "2022-02-01T00:00:00.000Z"
      }
    ]
  },
  {
    _id: uuidv4(),
    clerkUserId: "",
    name: "Buttons",
    icon: "RectangleIcon",
    createdAt: "2022-01-01T00:00:00.000Z",
    components: [
      {
        _id: uuidv4(),
        name: "Button 1",
        projectName: "Button red",
        code: `
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>`,
        isFavorite: false,
        createdAt: "2022-01-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Button 2",
        projectName: "Button blue",
        code: `
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>`,
        isFavorite: true,
        createdAt: "2022-02-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Button 3",
        projectName: "Button3",
        code: `
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>`,
        isFavorite: true,
        createdAt: "2022-02-01T00:00:00.000Z"
      }
    ]
  },
]