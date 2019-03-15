import React, { useState, useReducer } from 'react'
import './ChessRow.css'
import { Range, Map } from 'immutable'
import { gameStart, setPoint } from '../actions'
import setPointReducer from '../reducers/reducer'
import { applyMiddleware as dispatch } from 'redux'
import connect from 'react-redux/es/connect/connect'
import { FocusStyleManager } from '@blueprintjs/core'
import '../buttons.css'
export const Row = 15
export const Col = 15

function getInitState() {
  const initState = Map({
    board: Range(0, Row * Col)
      .toList()
      .map(() => ' '),
    currentPlayer: 'X',
    gameState: 'fail',
    gameStart: 'Start Game',
  })
  //console.log(initState.get)
  return initState
}

let ChessRow = () => {
  // const [state, setState] = useState(' ')
  const [state, dispatch] = useReducer(setPointReducer, getInitState())
  //console.log(state)
  return (
    <div className={'chess'}>
      <div style={{ width: 34 * Col }}>
        {Range(0, Row).map(indexRow => (
          <div key={indexRow}>
            {Range(0, Col).map(indexCol => (
              <button
                key={indexCol}
                className="square"
                type={'button'}
                onClick={() => {
                  let action = setPoint(indexRow * Col + indexCol)
                  dispatch(action)
                }}
              >
                {state.getIn(['board', indexRow * Col + indexCol])}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className={'body'}>
        <p className={'Player'}>
          {state.get('gameStart') === 'Gaming...'
            ? 'Next player:  ' + state.get('currentPlayer')
            : ''}
        </p>
        <p className={'game'}>
          {state.get('gameState') === 'win'
            ? state.get('currentPlayer') === 'X'
              ? 'Game End:' + 'O' + ' Player Wins'
              : 'Game End:' + 'X' + '  Player Wins'
            : ''}
        </p>
        <button
          className="button"
          onClick={() => dispatch(gameStart(state))}
          style={{ marginTop: 10 }}
        >
          <i className="fa fa-plus" />
          {state.get('gameStart')}
        </button>
      </div>
    </div>
  )
}

//ChessRow = connect()(ChessRow)
export default ChessRow
