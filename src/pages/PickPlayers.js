import React from 'react';
import {LargeInput, Text, FlexRowContainer, PrimaryButton} from "../components";
import {
    useNavigate
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {selectMatch} from "../redux/matchReducer/matchSlice";
import {
    changeTeamAName,
    changeTeamBName
} from '../redux/matchReducer/matchSlice';

export default () => {
    const navigate = useNavigate();
    const match = useSelector(selectMatch);
    const dispatch = useDispatch();
    console.log(match)
    return (
        <FlexRowContainer>
            <h3>{match.teamA.name}</h3>
            <h3>{match.teamB.name}</h3>
        </FlexRowContainer>
    );
}