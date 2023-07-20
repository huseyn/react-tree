const itemsDriveC = [
  {
    id: "1",
    name: "Goals (2)",
    icon: "activefolder",
    isDirectory: true,
    expanded: true,
  },
  {
    id: "2",
    parentId: "1",
    name: "1. Goal",
    childParentName: "Focus Area (2)",
    icon: "activefolder",
    isDirectory: true,
    expanded: true,
  },
  {
    id: "3",
    parentId: "2",
    name: "1.1 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
  },
  {
    id: "4",
    parentId: "2",
    name: "1.2 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
  },
  {
    id: "5",
    parentId: "1",
    name: "2. Goal",
    childParentName: "Focus Area (3)",
    icon: "file",
    isDirectory: false,
    expanded: true,
  },
  {
    id: "6",
    parentId: "5",
    name: "2.1 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
  },
  {
    id: "7",
    parentId: "5",
    name: "2.2 Focus Area",
    icon: "file",
    isDirectory: false,
    expanded: true,
  },
  {
    id: "8",
    parentId: "5",
    name: "2.3 Focus Area",
    icon: "activefolder",
    isDirectory: true,
    expanded: true,
  },
];

export default function getItemsDriveC() {
  return itemsDriveC;
}
