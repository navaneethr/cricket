import React from 'react';
import {
    useNavigate
} from "react-router-dom";
import {FlexColumnContainer, PrimaryButton} from "../components";
export default () => {
    const navigate = useNavigate();
    return (
        <FlexColumnContainer>
            <PrimaryButton onClick={() => navigate('/start-match')}>Start a Match</PrimaryButton>
        </FlexColumnContainer>
    );
}