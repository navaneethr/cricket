import React from 'react';
import styled from "styled-components";
import {theme} from "./Theme";

export const LargeInput = styled.input`
  border: 1px solid #999999;
  padding: ${theme.space.md};
  margin: ${theme.space.md};
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

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