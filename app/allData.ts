import { v4 as uuidv4 } from 'uuid';

export interface Components {
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
  components:   Components[];
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
  }
]