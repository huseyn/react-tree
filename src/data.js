const itemsDriveC = [
  {
    id: "1",
    name: "Goals (2)",
    icon: "activefolder",
    isDirectory: true,
    expanded: true,
    editable: false,
    childrenCount: 2,
  },
  {
    id: "2",
    parentId: "1",
    name: "1. Goal",
    childParentName: "Focus Area (2)",
    icon: "activefolder",
    isDirectory: true,
    expanded: true,
    editable: false,
    childrenCount: 2,
  },
  {
    id: "3",
    parentId: "2",
    name: "1.1 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
    editable: false,
  },
  {
    id: "4",
    parentId: "2",
    name: "1.2 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
    editable: false,
  },
  {
    id: "5",
    parentId: "1",
    name: "2. Goal",
    childParentName: "Focus Area (3)",
    icon: "file",
    isDirectory: false,
    expanded: true,
    editable: false,
    childrenCount: 3,
  },
  {
    id: "6",
    parentId: "5",
    name: "2.1 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
    editable: false,
  },
  {
    id: "7",
    parentId: "5",
    name: "2.2 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
    editable: false,
  },
  {
    id: "8",
    parentId: "5",
    name: "2.3 Focus Area",
    icon: "activefolder",
    isDirectory: true,
    expanded: true,
    editable: false,
  },
];

export default function getGoalsList() {
  return itemsDriveC;
}
