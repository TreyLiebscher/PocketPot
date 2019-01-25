import {
    ADD_PLAYER,
    addPlayer,
    CHIP_VALUE,
    chipValue,
    ADD_CHIPS,
    addChips,
    DIST_CHIPS,
    distChips,
    GIVE_CARDS,
    giveCards
} from './gameActions';

import {
    gameReducer
} from '../pocketpotReducer';

const testPlayers = [
    {
        name: 'Player1',
        chips: {
            white: 0,
            green: 0,
            red: 0,
            blue: 0,
            black: 0
        }
    },
    {
        name: 'Player2',
        chips: {
            white: 0,
            green: 0,
            red: 0,
            blue: 0,
            black: 0
        }
    },
    {
        name: 'Player3',
        chips: {
            white: 0,
            green: 0,
            red: 0,
            blue: 0,
            black: 0
        }
    },
    {
        name: 'Player4',
        chips: {
            white: 0,
            green: 0,
            red: 0,
            blue: 0,
            black: 0
        }
    }
]

describe('addPlayer', () => {
    it('Should return the action', () => {
        const player = {
            name: 'Test Player',
            chips: {
                white: 0,
                green: 0,
                red: 0,
                blue: 0,
                black: 0
            }
        };
        const action = addPlayer(player);
        expect(action.type).toEqual(ADD_PLAYER);
        expect(action.player).toEqual(player);
    });

    it('Should assign status based on order of entry', () => {
        let state = {
            players: []
        }
        const player1 = {
            name: 'Player1',
            chips: {
                white: 0,
                green: 0,
                red: 0,
                blue: 0,
                black: 0
            }
        };
        const player2 = {
            name: 'Player2',
            chips: {
                white: 0,
                green: 0,
                red: 0,
                blue: 0,
                black: 0
            }
        };
        const player3 = {
            name: 'Player3',
            chips: {
                white: 0,
                green: 0,
                red: 0,
                blue: 0,
                black: 0
            }
        };
        const player4 = {
            name: 'Player4',
            chips: {
                white: 0,
                green: 0,
                red: 0,
                blue: 0,
                black: 0
            }
        };
        state = gameReducer(state, addPlayer(player1));
        state = gameReducer(state, addPlayer(player2));
        state = gameReducer(state, addPlayer(player3));
        state = gameReducer(state, addPlayer(player4));
        expect(state).toEqual({
            error: null,
            loading: false,
            players: [{
                    name: 'Player1',
                    chips: {
                        white: 0,
                        green: 0,
                        red: 0,
                        blue: 0,
                        black: 0
                    },
                    status: 'dealer'
                },
                {
                    name: 'Player2',
                    chips: {
                        white: 0,
                        green: 0,
                        red: 0,
                        blue: 0,
                        black: 0
                    },
                    status: 'smallBlind'
                },
                {
                    name: 'Player3',
                    chips: {
                        white: 0,
                        green: 0,
                        red: 0,
                        blue: 0,
                        black: 0
                    },
                    status: 'bigBlind'
                },
                {
                    name: 'Player4',
                    chips: {
                        white: 0,
                        green: 0,
                        red: 0,
                        blue: 0,
                        black: 0
                    },
                    status: 'player'
                },
            ]
        });

    });
});

describe('chipValue', () => {
    it('Should return the action', () => {
        const testChips = {
            white: {
                value: 5,
                quantity: 20
            },
            red: {
                value: 10,
                quantity: 20
            },
            green: {
                value: 15,
                quantity: 20
            },
            blue: {
                value: 20,
                quantity: 20
            },
            black: {
                value: 25,
                quantity: 20
            }
        }
        const action = chipValue(testChips);
        expect(action.type).toEqual(CHIP_VALUE);
        expect(action.values).toEqual(testChips);
    });
});

describe('addChips', () => {
    it('Should return the action', () => {
        const chips = {
            name: 'Test Player',
            chips: {
                white: 20,
                green: 15,
                red: 10,
                blue: 5,
                black: 3
            }
        };
        const action = addChips(chips);
        expect(action.type).toEqual(ADD_CHIPS);
        expect(action.chips).toEqual(chips);
    });
});

describe('distChips', () => {
    it('Should return the action', () => {
        const action = distChips();
        expect(action.type).toEqual(DIST_CHIPS);
        expect(action.chips).toEqual();
    });
});

describe('giveCards', () => {
    it('Should return the action', () => {
        const action = giveCards();
        expect(action.type).toEqual(GIVE_CARDS);
    });

    it('Should evenly disperse cards, no duplicates', () => {
        let state = {
            players: []
        };

        const testCards = [1, 2, 3, 4, 5, 6, 7, 8];
        testPlayers.map((player) => {
            state = gameReducer(state, addPlayer(player));
        });

        state = gameReducer(state, giveCards(testCards));

        const player1 = state.players[0];
        const player2 = state.players[1];
        const player3 = state.players[2];
        const player4 = state.players[3];

        expect(player1.cards.pos1.value).toEqual(1);
        expect(player1.cards.pos2.value).toEqual(2);

        expect(player2.cards.pos1.value).toEqual(3);
        expect(player2.cards.pos2.value).toEqual(4);

        expect(player3.cards.pos1.value).toEqual(5);
        expect(player3.cards.pos2.value).toEqual(6);

        expect(player4.cards.pos1.value).toEqual(7);
        expect(player4.cards.pos2.value).toEqual(8);
    });
})