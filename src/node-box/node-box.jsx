import React, { useState, useCallback } from "react";
import { TextBox } from "devextreme-react/text-box";
import styled from "styled-components";

const NodeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NodeBoxContent = styled.div`
  display: flex;
  min-width: 1063px;
  min-height: 72px;
  background-color: #f2f2f2;
  margin-bottom: 16px;
`;

const DragIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: inherit;
  background-color: #1b90fd;
  position: relative;
  cursor: pointer;

  span {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 4px;
  }
`;

const NodeBoxInfo = styled.div`
  padding: 8px 16px;
  width: 100%;
  height: 100%;

  .box-title {
    color: var(--gray-base-dark, #888);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`;

const Title = styled.span`
  color: #0f4c75;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;

  &:before {
    content: "+";
    display: inline-block;
    text-align: center;
    width: 14px;
    height: 14px;
    line-height: 14px;
    border-radius: 50%;
    background-color: #0f4c75;
    color: #fff;
    margin-right: 8px;
  }
`;

const NodeBox = ({ nodeItem, add }) => {
  const [value, setValue] = useState("");

  const onValueChange = useCallback((v) => {
    setValue(v);
  }, []);

  const onEnterKey = useCallback(() => {
    console.log(value);
  }, [value]);

  const handleAddClick = useCallback(() => {
    add(nodeItem.id);
  }, [add, nodeItem.id]);

  return nodeItem.parentId ? (
    <NodeBoxContainer>
      <NodeBoxContent>
        <DragIcon>
          {[1, 2, 3, 4, 5].map((dot) => (
            <span key={dot} />
          ))}
        </DragIcon>
        <NodeBoxInfo>
          {nodeItem.editable ? (
            <TextBox
              value={value}
              valueChangeEvent="input"
              onValueChange={onValueChange}
              onEnterKey={onEnterKey}
            />
          ) : (
            <span className="box-title">{nodeItem.name}</span>
          )}
        </NodeBoxInfo>
      </NodeBoxContent>
      {nodeItem.childParentName && (
        <Title onClick={handleAddClick}>{`${nodeItem.childParentName} ${
          nodeItem.childrenCount ? (nodeItem.childrenCount) : ""
        }`}</Title>
      )}
    </NodeBoxContainer>
  ) : (
    <Title onClick={handleAddClick}>{nodeItem.name}</Title>
  );
};

export default NodeBox;
