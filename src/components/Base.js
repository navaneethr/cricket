import React from 'react';
import styled from "styled-components";
import {theme} from "./Theme";

export const LargeInput = styled.input`
  border: 1px solid #999999;
  padding: ${theme.space.md};
  margin: ${theme.space.md};
  border-radius: 5px;
  font-size: ${theme.fontSize.md};
  font-weight: bold;
`;

export const Input = styled.input`
  border: 1px solid #999999;
  padding: ${theme.space.xs};
  margin: ${theme.space.xs};
  border-radius: 5px;
  width: 200px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  margin: ${theme.space.xs};
  border-radius: 5px;
  font-size: ${theme.fontSize.sm};
  display: block;
`;


export const LabelInput = ({label, ...props}) => {
    return (
        <div>
            <Label>{label}</Label>
            <Input {...props}/>
        </div>
    )
}

export const LabelSelect = ({label, ...props}) => {
    return (
        <div>
            <Label>{label}</Label>
            <Select {...props}/>
        </div>
    )
}

export const Text = styled.span`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
`;

export const FlexColumnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
`;

export const PrimaryButton = styled.button`
  border: 1px solid #999999;
  padding: ${theme.space.xs};
  margin: ${theme.space.md};
  border-radius: 5px;
  cursor: pointer;
`;

export const DangerButton = styled.button`
  padding: ${theme.space.xs};
  margin: ${theme.space.md};
  border-radius: 5px;
  cursor: pointer;
  background: red;
  color: #fff;
  outline: none;
  border: none;
  font-weight: bold;
  min-width: 30px;
`;

export const Select = styled.select`
  border: 1px solid #999999;
  padding: ${theme.space.xs};
  margin: ${theme.space.xs};
  border-radius: 5px;
  width: 200px;
  box-sizing: border-box;
`