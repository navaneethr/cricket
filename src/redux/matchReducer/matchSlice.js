import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teamA: {
        name: ''
    },
    teamB: {
        name: ''
    },
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
        }
    }
});

export const { changeTeamAName, changeTeamBName } = matchSlice.actions;

export const selectMatch = (state) => state.match;

export default matchSlice.reducer;
