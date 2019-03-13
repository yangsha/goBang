import React from 'react'

const reducer = (state, action) => {

  if (action.type === 'SET_POINT') {
    if (state.get('board').get(action.position) === ' ') {
      const newState=state
        .setIn(['board', action.position], state.get('currentPlayer'))
        .set('currentPlayer', state.get('currentPlayer') === 'X' ? 'O' : 'X')
      //const position = action.position;
      //if(newState.get(position)===newState.get)
      return newState
    } else {
      return state
    }
  } else {
    return state
  }
}

export default reducer
