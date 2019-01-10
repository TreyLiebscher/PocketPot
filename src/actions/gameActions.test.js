import { ADD_PLAYER, addPlayer, CHIP_VALUE, chipValue, ADD_CHIPS, addChips } from './gameActions';

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
});

describe('chipValue', () => {
    it('Should return the action', () => {
        const testChips = {
            white: {value: 5, quantity: 20}, 
            red: {value: 10, quantity: 20}, 
            green: {value: 15, quantity: 20}, 
            blue: {value: 20, quantity: 20}, 
            black: {value: 25, quantity: 20}
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