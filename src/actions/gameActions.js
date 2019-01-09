export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = (name) => ({
    type: ADD_PLAYER,
    name
});

export const CHIP_VALUE = 'CHIP_VALUE';
export const chipValue = (values) => ({
    type: CHIP_VALUE,
    values
});