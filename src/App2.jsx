import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import TreeView from "devextreme-react/tree-view";
import Sortable from "devextreme-react/sortable";
import NodeBox from "./node-box/node-box.jsx";

const StyledSortable = styled(Sortable)`
  * {
    list-style: none;
  }

  ul {
    width: 100%;
  }

  li {
    width: 100%;
    padding: 15px;
  }
`;

const App = () => {
  const treeViewDriveCRef = useRef(null);

  const [goalsList, setGoalsList] = useState([
    {
      id: "1",
      name: "Goals",
      icon: "activefolder",
      isDirectory: true,
      expanded: true,
      editable: false,
      childrenCount: 2,
      prevChildrenCount: 0,
    },
    {
      id: "2",
      parentId: "1",
      name: "1. Goal",
      childParentName: "Focus Area",
      icon: "activefolder",
      isDirectory: true,
      expanded: true,
      editable: false,
      childrenCount: 2,
      prevChildrenCount: 0,
    },
    {
      id: "3",
      parentId: "2",
      name: "1.1 Focus Area",
      icon: "file",
      isDirectory: false,
      expanded: true,
      editable: false,
      prevChildrenCount: 0,
    },
    {
      id: "4",
      parentId: "2",
      name: "1.2 Focus Area",
      icon: "file",
      isDirectory: false,
      expanded: true,
      editable: false,
      prevChildrenCount: 0,
    },
    {
      id: "5",
      parentId: "1",
      name: "2. Goal",
      childParentName: "Focus Area",
      icon: "file",
      isDirectory: false,
      expanded: true,
      editable: false,
      childrenCount: 3,
      prevChildrenCount: 2,
    },
    {
      id: "6",
      parentId: "5",
      name: "2.1 Focus Area",
      icon: "file",
      isDirectory: false,
      expanded: true,
      editable: false,
      prevChildrenCount: 0,
    },
    {
      id: "7",
      parentId: "5",
      name: "2.2 Focus Area",
      icon: "file",
      isDirectory: false,
      expanded: true,
      editable: false,
      prevChildrenCount: 0,
    },
    {
      id: "8",
      parentId: "5",
      name: "2.3 Focus Area",
      icon: "activefolder",
      isDirectory: true,
      expanded: true,
      editable: false,
      prevChildrenCount: 0,
    },
  ]);

  const addNewNode = useCallback((parentId) => {
    setGoalsList((prevList) => {
      const newId = Math.max(...prevList.map((item) => item.id)) + 1;
      return [
        {
          id: newId,
          parentId,
          icon: "file",
          name: "",
          isDirectory: false,
          expanded: true,
          editable: true,
        },
        ...prevList,
      ];
    });
  }, []);

  const renderTreeViewItem = (item) => {
    console.log("item", item);
    return <NodeBox add={addNewNode} nodeItem={item} />;
  };

  const onDragChange = (e) => {
    if (e.fromComponent === e.toComponent) {
      const fromNode = findNode(getTreeView(e.fromData), e.fromIndex);
      const toNode = findNode(getTreeView(e.toData), calculateToIndex(e));
      if (toNode !== null && isChildNode(fromNode, toNode)) {
        e.cancel = true;
      }
    }
  };

  const onDragEnd = (e) => {
    if (e.fromComponent === e.toComponent && e.fromIndex === e.toIndex) {
      return;
    }

    const fromTreeView = getTreeView(e.fromData);
    const toTreeView = getTreeView(e.toData);

    const fromNode = findNode(fromTreeView, e.fromIndex);
    const toNode = findNode(toTreeView, calculateToIndex(e));

    if (e.dropInsideItem && toNode !== null && !toNode.itemData.isDirectory) {
      return;
    }

    const fromTopVisibleNode = getTopVisibleNode(e.fromComponent);
    const toTopVisibleNode = getTopVisibleNode(e.toComponent);

    const fromItems = [...goalsList];
    const toItems = [...goalsList];
    moveNode(fromNode, toNode, fromItems, toItems, e.dropInsideItem);

    setGoalsList(fromItems);

    fromTreeView.scrollToItem(fromTopVisibleNode);
    toTreeView.scrollToItem(toTopVisibleNode);
  };

  const getTreeView = (driveName) => {
    return driveName === "driveC" ? treeViewDriveCRef.current?.instance : "";
  };

  const calculateToIndex = (e) => {
    if (e.fromComponent !== e.toComponent || e.dropInsideItem) {
      return e.toIndex;
    }
    return e.fromIndex >= e.toIndex ? e.toIndex : e.toIndex + 1;
  };

  const findNode = (treeView, index) => {
    const nodeElement = treeView
      .element()
      .querySelectorAll(".dx-treeview-node")[index];
    if (nodeElement) {
      return findNodeById(
        treeView.getNodes(),
        nodeElement.getAttribute("data-item-id")
      );
    }
    return null;
  };

  const findNodeById = (nodes, id) => {
    for (let i = 0; i < nodes.length; i += 1) {
      if (nodes[i].itemData.id === id) {
        return nodes[i];
      }
      if (nodes[i].children) {
        const node = findNodeById(nodes[i].children, id);
        if (node != null) {
          return node;
        }
      }
    }
    return null;
  };

  const moveNode = (fromNode, toNode, fromItems, toItems, isDropInsideItem) => {
    const fromIndex = fromItems.findIndex(
      (item) => item.id === fromNode.itemData.id
    );
    fromItems.splice(fromIndex, 1);

    const toIndex =
      toNode === null || isDropInsideItem
        ? toItems.length
        : toItems.findIndex((item) => item.id === toNode.itemData.id);
    toItems.splice(toIndex, 0, fromNode.itemData);

    moveChildren(fromNode, fromItems, toItems);
    if (isDropInsideItem) {
      fromNode.itemData.parentId = toNode.itemData.id;
    } else {
      fromNode.itemData.parentId =
        toNode != null ? toNode.itemData.parentId : undefined;
    }
  };

  const moveChildren = (node, fromDataSource, toDataSource) => {
    if (!node.itemData.isDirectory) {
      return;
    }

    node.children.forEach((child) => {
      if (child.itemData.isDirectory) {
        moveChildren(child, fromDataSource, toDataSource);
      }

      const fromIndex = fromDataSource.findIndex(
        (item) => item.id === child.itemData.id
      );
      fromDataSource.splice(fromIndex, 1);
      toDataSource.splice(toDataSource.length, 0, child.itemData);
    });
  };

  const isChildNode = (parentNode, childNode) => {
    let { parent } = childNode;
    while (parent !== null) {
      if (parent.itemData.id === parentNode.itemData.id) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  };

  const getTopVisibleNode = (component) => {
    const treeViewElement = component.element();
    const treeViewTopPosition = treeViewElement.getBoundingClientRect().top;
    const nodes = treeViewElement.querySelectorAll(".dx-treeview-node");
    for (let i = 0; i < nodes.length; i += 1) {
      const nodeTopPosition = nodes[i].getBoundingClientRect().top;
      if (nodeTopPosition >= treeViewTopPosition) {
        return nodes[i];
      }
    }
    return null;
  };

  return (
    <StyledSortable
      filter=".dx-treeview-item"
      group="shared"
      data="driveC"
      allowDropInsideItem={true}
      allowReordering={true}
      onDragChange={onDragChange}
      onDragEnd={onDragEnd}
    >
      <TreeView
        id="treeviewDriveC"
        expandNodesRecursive={false}
        dataStructure="plain"
        ref={treeViewDriveCRef}
        items={goalsList}
        width={250}
        height={380}
        displayExpr="name"
        itemRender={renderTreeViewItem}
      />
    </StyledSortable>
  );
};

export default App;
