import React from "react";
import Tree from "./Tree";

const App = () => {
  const treeData = [
    {
      id: 1,
      description: {
        label: "Goals",
        text: "",
      },
      childLabel: "",
      level: 1,
      children: [
        {
          id: 2,
          description: {
            label: "1. Goal",
            text: "Improve Access to Government Services and Information",
          },
          childLabel: "Focus Area",
          level: 2,
          children: [
            {
              id: 41,
              description: {
                label: "1.1 Focus area",
                text: "Improve Access to Government Services and Information",
              },
              childLabel: "",
              level: 3,
            },
            {
              id: 44,
              description: {
                label: "1.2 Focus area",
                text: "Improve Access to Government Services and Information",
              },
              childLabel: "",
              level: 3,
            },
            {
              id: 434,
              description: {
                label: "1.3 Focus area",
                text: "Improve Access to Government Services and Information",
              },
              childLabel: "",
              level: 3,
            },
            {
              id: 448,
              description: {
                label: "1.4 Focus area",
                text: "Improve Access to Government Services and Information",
              },
              childLabel: "",
              level: 3,
            },
            {
              id: 58,
              description: {
                label: "1.5 Focus area",
                text: "Improve Access to Government Services and Information",
              },
              childLabel: "",
              level: 3,
            },
          ],
        },
        {
          id: 3,
          description: {
            label: "2. Goal",
            text: "Improve Access to Government Services and Information",
          },
          childLabel: "Focus Area (3)",
          level: 2,
          children: [],
        },
      ],
    },
  ];

  return <Tree data={treeData} />;
};

export default App;
