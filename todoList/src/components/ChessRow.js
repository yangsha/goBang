import React, {useReducer} from 'react'
import './ChessRow.css'
import {gameStart, resetGame, setPoint} from '../actions'
import setPointReducer from '../reducers/reducer'
import '../buttons.css'

import {Record,Range} from "immutable";

export const Row = 15
export const Col = 15

const GameRecord = Record({
  board: Range(0, Row * Col)
    .toList()
    .map(() => ' '),
  currentPlayer: 'X',
  gameState: 'fail',
  gameStart: 'Start Game'
})

function getInitState() {
  //console.log(initState.get)
  const initialState = new GameRecord()
  return initialState
}

let ChessRow = () => {
  // const [state, setState] = useState(' ')
  const [state, dispatch] = useReducer(setPointReducer, getInitState())
  //console.log(state.board.get(100))
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
                {state.board.get(indexRow*Col+indexCol) }
          </button>
            ))}
          </div>
        ))}
      </div>
      <div className={'body'}>
        <p className={'Player'}>
          {state.gameStart === 'Gaming...'
            ? 'Next player:  ' + state.currentPlayer
            : ''}
        </p>
        <p className={'game'}>
          {state.gameState === 'win'
            ? state.currentPlayer=== 'X'
              ? 'Game End:' + 'O' + ' Player Wins'
              : 'Game End:' + 'X' + '  Player Wins'
            : ''}
        </p>
        <button
          className="button"
          onClick={() => dispatch(gameStart(state))}
          style={{ marginTop: 10 ,position:'center'}}
        >
          <i className="fa fa-plus" />
          {state.gameStart}
        </button>
        <button
          className="button"
          onClick={()=>dispatch(resetGame(state))}
          style={{ marginTop: 10 ,position:'center',marginLeft:10}}
        >
          <i className="fa fa-plus" />
          Game Reset
        </button>
      </div>
    </div>
  )
}
//ChessRow = connect()(ChessRow)
export default ChessRow
