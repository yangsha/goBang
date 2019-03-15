import React from 'react'
import{Row,Col}from '../components/ChessRow'

const reducer = (state, action) => {
  if (
    action.type === 'SET_POINT' &&
    state.get('gameState') === 'fail' &&
    state.get('gameStart')==='Gaming...'
  ) {
    if (state.get('board').get(action.position) === ' ') {
      const newState = state
        .setIn(['board', action.position], state.get('currentPlayer'))
        .set('currentPlayer', state.get('currentPlayer') === 'X' ? 'O' : 'X')
      //判断横行成五子
      let countRow = 0
      const current = newState.get('currentPlayer') === 'X' ? 'O' : 'X'
      let positionLeft = action.position
      while (positionLeft % Col !== 0) {
        positionLeft--
        if (newState.getIn(['board', positionLeft]) === current) {
          countRow++
        } else {
          break
        }
      }
      let positionRight = action.position
      while ((positionRight + 1) % Col !== 0) {
        positionRight++
        if (newState.getIn(['board', positionRight]) === current) {
          countRow++
        } else {
          break
        }
      }
      //判断竖行成五子
      let countCol = 0
      //const current = newState.get('currentPlayer') === 'X' ? 'O' : 'X';
      let positionUp = action.position
      while (Math.floor(positionUp /Col) !== 0) {
        positionUp = positionUp - Col
        if (newState.getIn(['board', positionUp]) === current) {
          countCol++
        } else {
          break
        }
      }
      let positionDown = action.position
      while ((positionDown) / Col < Row-1) {
        positionDown = positionDown + Col
        if (newState.getIn(['board', positionDown]) === current) {
          countCol++
        } else {
          break
        }
      }
      //判断是否左上-右下成五子
      let countLeftDown = 0
      let positionLeftUp = action.position
      let row = Math.floor(positionLeftUp / Col)
      let col = Math.floor(positionLeftUp % Col)
      while (row !== 0 && col !== 0) {
        row--
        col--
        if (newState.getIn(['board', row * Col + col]) === current) {
          countLeftDown++
        } else {
          break
        }
      }
      let positionRightDown = action.position
      row = Math.floor(positionRightDown / Col)
      col = Math.floor(positionRightDown % Col)
      while (row !== Row-1 && col !== Col-1) {
        row++
        col++
        if (newState.getIn(['board', row * Col + col]) === current) {
          countLeftDown++
        } else {
          break
        }
      }
      //判断是否左下-右上成五子
      let countLeftUp = 0
      let positionLeftDown = action.position
      row = Math.floor(positionLeftDown / Col)
      col = Math.floor(positionLeftDown % Col)
      while (row !== Row-1 && col !== 0) {
        row++
        col--
        if (newState.getIn(['board', row * Col + col]) === current) {
          countLeftUp++
        } else {
          break
        }
      }
      let positionRightUp = action.position
      row = Math.floor(positionRightUp / Col)
      col = Math.floor(positionRightUp % Col)
      while (row !== 0 && col !== Col-1) {
        row--
        col++
        if (newState.getIn(['board', row * Col + col]) === current) {
          countLeftUp++
        } else {
          break
        }
      }
      if (countRow === 4 || countCol === 4 || countLeftDown === 4 || countLeftUp === 4) {
        return newState.set('gameState', 'win').set('gameStart','Start Game')
      } else {
        return newState
      }
    } else {
      return state
    }
  } else if (action.type === 'GAME_START') {
    return state.set('gameStart', 'Gaming...')
  } else {
    return state
  }
}

export default reducer
