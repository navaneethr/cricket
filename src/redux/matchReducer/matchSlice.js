import { createSlice } from '@reduxjs/toolkit';

export const NEW_PLAYER_KEYS = {
    FULL_NAME: 'fullName',
    BATTING_HAND: 'battingHand',
    BATTING_POSITION: 'battingPosition',
    BOWLING_HAND: 'bowlingHand',
    BOWLING_STYLE: 'bowlingStyle',
    FIELDING_POSITION: 'fieldingPosition',
}

const {FULL_NAME, FIELDING_POSITION, BATTING_POSITION, BATTING_HAND, BOWLING_HAND, BOWLING_STYLE} = NEW_PLAYER_KEYS;

const newPlayer = {
    [FULL_NAME]: '',
    [BATTING_HAND]: 'NA',
    [BATTING_POSITION]: 'NA',
    [BOWLING_HAND]: 'NA',
    [BOWLING_STYLE]: 'NA',
    [FIELDING_POSITION]: 'NA'
};


// ------- Testing Things Out, Remove this after testing --- Start
const names = ['Rohan', 'Virat', 'Rohit', 'Nav', 'Nithin', 'Anu', 'Ashu', 'Jadeja', 'Ishan', 'Bumrah', 'Dave']

const teamADummyData = names.map((name) => ({...newPlayer, fullName: name}));
const teamBDummyData = names.reverse().map((name) => ({...newPlayer, fullName: name}));
// ------- Testing Things Out --- End


const initialState = {
    teamA: {
        name: 'Hawks',
        players: teamADummyData
    },
    teamB: {
        name: 'Dragons',
        players: teamBDummyData
    },
    matchType: 't20'
};

export const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        changeTeamAName: (state, action) => {
            state.teamA.name = action.payload;
        },
        changeTeamBName: (state, action) => {
            state.teamB.name = action.payload;
        },
        addNewPlayerA: (state, action) => {
            state.teamA.players = [...state.teamA.players, newPlayer];
        },
        addNewPlayerB: (state, action) => {
            state.teamB.players = [...state.teamB.players, newPlayer];
        },
        updatePlayerA: (state, action) => {
            state.teamA.players = action.payload
        },
        updatePlayerB: (state, action) => {
            state.teamB.players = action.payload
        },
        changeMatchType: (state, action) => {
            state.matchType = action.payload
        },
    }
});

export const { changeTeamAName, changeTeamBName, addNewPlayerA, addNewPlayerB, updatePlayerA, updatePlayerB, changeMatchType } = matchSlice.actions;

export const selectMatch = (state) => state.match;

export default matchSlice.reducer;
