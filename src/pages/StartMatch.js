import React from 'react';
import {LargeInput, Text, FlexColumnContainer, PrimaryButton} from "../components";
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
        <FlexColumnContainer>
            <h3>Please select Team A and Team B</h3>
            <div>
                <LargeInput value={match.teamA.name} placeholder="Team A" onChange={(e) => dispatch(changeTeamAName(e.target.value))}/>
                <Text fontWeight="bold" fontSize="24px">v/s</Text>
                <LargeInput value={match.teamB.name} placeholder="Team B" onChange={(e) => dispatch(changeTeamBName(e.target.value))}/>
            </div>
            <PrimaryButton onClick={() => {navigate('/pick-players')}}>Go to Team Builder</PrimaryButton>
        </FlexColumnContainer>
    );
}