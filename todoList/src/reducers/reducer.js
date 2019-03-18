import React from 'react'
import { Col, Row } from '../components/ChessRow'
import { Range } from 'immutable/dist/immutable'

const up = p => {
  if (p === -1) {
    return -1
  } else if (Math.floor(p / Col) === 0) {
    return -1
  } else {
    return p - Col
  }
}

const down = p => {
  if (p === -1) {
    return -1
  } else if (Math.floor(p / Col) === Row - 1) {
    return -1
  } else {
    return p + Col
  }
}

const left = p => {
  if (p === -1) {
    return -1
  } else if (p % Col === 0) {
    return -1
  } else {
    return p - 1
  }
}

const right = p => {
  if (p === -1) {
    return -1
  } else if (p % Col === Col - 1) {
    return -1
  } else {
    return p + 1
  }
}

const upLeft = p => up(left(p))
const upRight = p => up(right(p))
const downLeft = p => down(left(p))
const downRight = p => down(right(p))

const directionPairs = [[left, right], [up, down], [upLeft, downRight], [upRight, downLeft]]

function isPlayerWin(board, lastPosition) {
  //console.log(board)
  const current = board.get(lastPosition)
  for (const pair of directionPairs) {
    let counter = 1
    for (const direction of pair) {
      let p = lastPosition
      while (p !== -1) {
        p = direction(p)
        if (board.get(p) === current) {
          counter++
          if (counter >= 5) {
            return true
          }
        } else {
          break
        }
      }
    }
  }
  return false
}

const reducer = (state, action) => {
  if (
    action.type === 'SET_POINT' &&
    state.gameState === 'fail' &&
    state.gameStart=== 'Gaming...'
  ) {
    if (state.board.get(action.position) === ' ') {

      const newState = state
        .setIn(['board', action.position], state.currentPlayer)
        .set('currentPlayer', state.currentPlayer === 'X' ? 'O' : 'X')

      if (isPlayerWin(newState.board, action.position)) {
        return newState.set('gameState', 'win').set('gameStart', 'Start Game')
      } else {
        return newState
      }
    } else {
      return state
    }
  } else if (action.type === 'GAME_START') {
    return state
      .set('gameStart', 'Gaming...')
      .set('gameState', 'fail')
      .set(
        'board',
        Range(0, Row * Col)
          .toList()
          .map(() => ' '),
      )
  } else if (action.type === 'GAME_RESET') {
    return state
      .set('gameStart', 'Game Start')
      .set('GameState', 'fail')
      .set(
        'board',
        Range(0, Row * Col)
          .toList()
          .map(() => ' '),
      )
  } else {
    return state
  }
}
export default reducer
