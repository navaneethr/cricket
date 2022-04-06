import styled from "styled-components";
import {theme} from "./Theme";
import React, {useState} from "react";
import {DangerButton, LabelInput, LabelSelect} from "./Base";

const InputMoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Anchor = styled.a`
  font-size: ${theme.fontSize.sm};
  padding: 0 ${theme.space.xs};
  color: dodgerblue;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: mediumpurple;
  }
`

const InputWrapper = styled.div`
    display: flex;
    border: 1px solid #cacaca;
    padding: ${theme.space.sm};
    margin: ${theme.space.sm} ${theme.space.xs};
    border-radius: 5px;
    flex-wrap: wrap;
`;


const PlayerProfileSelector = ({
                                   fullName,
                                   onFullNameChange,
                                   battingHand,
                                   onBattingHandChange,
                                   bowlingHand,
                                   onBowlingHandChange,
                                   battingPosition,
                                   onBattingPositionChange,
                                   bowlingStyle,
                                   onBowlingStyleChange,
                                   fieldingPosition,
                                   onFieldingPositionChange
                               }) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <InputWrapper>
                <InputMoreWrapper>
                    <LabelInput label="Player Name" value={fullName} onChange={(e) => onFullNameChange(e.target.value)}/>
                </InputMoreWrapper>
                {
                    showMore &&
                    <>
                        <LabelSelect label="Batting Hand" value={battingHand} onChange={(e) => onBattingHandChange(e.target.value)}>
                            <option value="NA">Skip</option>
                            <option value="right">Right</option>
                            <option value="left">Left</option>
                        </LabelSelect>
                        <LabelSelect label="Batting Position" value={battingPosition} onChange={(e) => onBattingPositionChange(e.target.value)}>
                            <option value="NA">Skip</option>
                            <option value="opener">Opener</option>
                            <option value="middle">Middle Order</option>
                            <option value="tail">Tailender</option>
                        </LabelSelect>
                        <LabelSelect label="Bowling Hand" value={bowlingHand} onChange={(e) => onBowlingHandChange(e.target.value)}>
                            <option value="NA">Skip</option>
                            <option value="right">Right</option>
                            <option value="left">Left</option>
                        </LabelSelect>
                        <LabelSelect label="Bowling Style" value={bowlingStyle} onChange={(e) => onBowlingStyleChange(e.target.value)}>
                            <option value="NA">Skip</option>
                            <option value="fast">Fast</option>
                            <option value="medium-fast">Medium Fast</option>
                            <option value="medium">Medium</option>
                            <option value="spin">Spin</option>
                        </LabelSelect>
                        <LabelSelect label="Fielding Position" value={fieldingPosition} onChange={(e) => onFieldingPositionChange(e.target.value)}>
                            <option value="NA">Skip</option>
                            <option value="30yard">30 Yard</option>
                            <option value="outfield">Out Field</option>
                            <option value="keeper">Wicket Keeper</option>
                        </LabelSelect>
                    </>
                }

                <DangerButton>X</DangerButton>
            </InputWrapper>
            <Anchor onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less': 'Show More..'}</Anchor>
        </>

    )
}

export default PlayerProfileSelector;