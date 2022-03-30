import React from 'react';
import {LargeInput, Text, FlexColumnContainer, PrimaryButton} from "../components";
import {
    useNavigate
} from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    return (
        <FlexColumnContainer>
            <h3>Please select Team A and Team B</h3>
            <div>
                <LargeInput placeholder="Team A"/>
                <Text fontWeight="bold" fontSize="24px">v/s</Text>
                <LargeInput placeholder="Team B"/>
            </div>
            <PrimaryButton onClick={() => {navigate('/start-match')}}>Go to Team Builder</PrimaryButton>
        </FlexColumnContainer>
    );
}