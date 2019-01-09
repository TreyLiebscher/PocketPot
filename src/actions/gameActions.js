

export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = (name) => ({
    type: ADD_PLAYER,
    name
});





// export const addPlayer = name => dispatch => {
//     dispatch(addPlayerRequest())
//     return createPlayer(name)
//         .then(player => dispatch(addPlayerSuccess(player)))
//         .catch(error => {
//             console.log('Error', error)
//             dispatch(addPlayerError(error))
//         });
// }

// export function createPlayer(name){
//     return {
//         player: name,
//         chips: 0
//     }
// }