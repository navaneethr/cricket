import React, {useState} from 'react';
import {
    DangerButton, FlexRowContainer,
    LabelInput, LabelSelect, PrimaryButton
} from "../components";
import {
    useNavigate
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import {theme} from "../components/Theme";
import {
    selectMatch,
    addNewPlayerA,
    addNewPlayerB,
    updatePlayerA,
    updatePlayerB, NEW_PLAYER_KEYS, changeMatchType,
} from '../redux/matchReducer/matchSlice';
import SwitchBoard from "../components/Switch";
import PlayerProfileSelector from "../components/PlayerProfileSelector";

const TeamNameH3 = styled.h3`
  margin: ${theme.space.xs}
`

const Span = styled.span`
  margin: ${theme.space.sm} ${theme.space.xs};
  display: block;
  font-size: ${theme.fontSize.sm};
  font-weight: bold;
`

const TeamWrapper = styled.div`
    padding: ${theme.space.md};
    display: flex;
    flex-direction: column;
    align-items: center;
`;



const {FULL_NAME, FIELDING_POSITION, BATTING_POSITION, BATTING_HAND, BOWLING_HAND, BOWLING_STYLE} = NEW_PLAYER_KEYS;

const PickPlayers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {teamA, teamB} = useSelector(selectMatch);
    const [selectedTeam, setSelectedTeam] = useState('A')
    const updateTeamAPlayer = (index, field, value) => {
        let selectedPlayer = teamA.players[index];
        selectedPlayer = {
            ...selectedPlayer,
            [field]: value
        }
        const updatedPlayers = [
            ...teamA.players.slice(0, index),
            selectedPlayer,
            ...teamA.players.slice(index + 1)
        ]

        dispatch(updatePlayerA(updatedPlayers))
    };

    const updateTeamBPlayer = (index, field, value) => {
        console.log(index, field, value)
        let selectedPlayer = teamB.players[index];
        selectedPlayer = {
            ...selectedPlayer,
            [field]: value
        }
        const updatedPlayers = [
            ...teamB.players.slice(0, index),
            selectedPlayer,
            ...teamB.players.slice(index + 1)
        ]

        dispatch(updatePlayerB(updatedPlayers))
    };

    const updateTeamPlayer = selectedTeam === 'A' ? updateTeamAPlayer : updateTeamBPlayer;
    const addNewPlayer = selectedTeam === 'A' ? addNewPlayerA : addNewPlayerB;
    const team = selectedTeam === 'A' ? teamA : teamB;

    return (
        <TeamWrapper>
            <SwitchBoard
                options={[{label: teamA.name, value: 'A'}, {label: teamB.name, value: 'B'}]}
                value={selectedTeam}
                onClick={(team) => setSelectedTeam(team)}
            />
            <div>
                <TeamNameH3>{team.name}</TeamNameH3>
                <Span>Enter Player Details</Span>
                {
                    team.players.map(({fullName, battingHand, bowlingHand, battingPosition, bowlingStyle, fieldingPosition}, idx) => {
                        return (
                            <PlayerProfileSelector
                                fullName={fullName}
                                onFullNameChange={(value) => updateTeamPlayer(idx, FULL_NAME, value)}
                                battingHand={battingHand}
                                onBattingHandChange={(value) => updateTeamPlayer(idx, BATTING_HAND, value)}
                                bowlingHand={bowlingHand}
                                onBowlingHandChange={(value) => updateTeamPlayer(idx, BOWLING_HAND, value)}
                                battingPosition={battingPosition}
                                onBattingPositionChange={(value) => updateTeamPlayer(idx, BATTING_POSITION, value)}
                                bowlingStyle={bowlingStyle}
                                onBowlingStyleChange={(value) => updateTeamPlayer(idx, BOWLING_STYLE, value)}
                                fieldingPosition={fieldingPosition}
                                onFieldingPositionChange={(value) => updateTeamPlayer(idx, FIELDING_POSITION, value)}
                            />
                        )
                    })
                }
                <PrimaryButton onClick={() => dispatch(addNewPlayer())}>Add Player</PrimaryButton>
            </div>
        </TeamWrapper>
    );
}




export default PickPlayers;