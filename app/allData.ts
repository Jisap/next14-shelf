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
        code: "",
        isFavorite: false,
        createdAt: "2022-01-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Forms 2",
        projectName: "Forms",
        code: "",
        isFavorite: true,
        createdAt: "2022-02-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Forms 3",
        projectName: "Forms",
        code: "",
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
        projectName: "Button2",
        code: "",
        isFavorite: false,
        createdAt: "2022-01-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Button 2",
        projectName: "Button2",
        code: "",
        isFavorite: true,
        createdAt: "2022-02-01T00:00:00.000Z"
      },
      {
        _id: uuidv4(),
        name: "Button 3",
        projectName: "Button3",
        code: "",
        isFavorite: true,
        createdAt: "2022-02-01T00:00:00.000Z"
      }
    ]
  },
]