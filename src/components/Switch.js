import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {theme} from "./Theme";

const Button = styled.button`
  background: ${({active}) => active && 'red'};
  color: ${({active}) => active && '#fff'};
  border: ${({active}) => active ? '1px solid red' : '1px solid #cacaca'};
  padding: ${theme.space.sm};
  cursor: pointer;
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

const SwitchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const SwitchBoard = ({options, value, onClick}) => {

    const [selected, setSelected] = useState(value);

    useEffect(() => {
        onClick(selected);
    }, [selected])

    return (
        <SwitchWrapper>
            {
                options.map(({label, value}) => {
                    return (
                        <Button active={value === selected} onClick={() => setSelected(value)}>{label}</Button>
                    )
                })
            }

        </SwitchWrapper>
    )
}

export default SwitchBoard;