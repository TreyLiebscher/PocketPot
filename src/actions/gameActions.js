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

export const GIVE_CARDS = 'GIVE_CARDS';
export const giveCards = (cards) => ({
    type: GIVE_CARDS,
    cards
});

export const DIST_CHIPS = 'DIST_CHIPS';
export const distChips = (chips) => ({
    type: DIST_CHIPS,
    chips
});

export const HAND_OVER = 'HAND_OVER';
export const handOver = () => ({
    type: HAND_OVER
});

export const MAKE_BET = 'MAKE_BET';
export const makeBet = (bet) => ({
    type: MAKE_BET,
    bet
});