export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = (player) => ({
    type: ADD_PLAYER,
    player
});

export const CHIP_VALUE = 'CHIP_VALUE';
export const chipValue = (values) => ({
    type: CHIP_VALUE,
    values
});

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = (chips) => ({
    type: ADD_CHIPS,
    chips
});

export const DIST_CHIPS = 'DIST_CHIPS';
export const distChips = (chips) => ({
    type: DIST_CHIPS,
    chips
});