import React, {useState, useReducer} from 'react'
import './ChessRow.css'
import {Range, Map} from 'immutable'
import {setPoint} from '../actions'
import setPointReducer from '../reducers/reducer'
import {applyMiddleware as dispatch} from 'redux'
import connect from 'react-redux/es/connect/connect'
import {FocusStyleManager} from "@blueprintjs/core"

const Row = 9
const Col = 9

function getInitState() {

  const initState = Map
  ( {
    board:Range(0, Row * Col)
      .toList()
      .map(() =>' '),
    currentPlayer: 'X',
    gameState:true
  })
  return initState
}

let ChessRow = () => {
  // const [state, setState] = useState(' ')
  const [state, dispatch] = useReducer(setPointReducer, getInitState())
  console.log(state)
  return Range(0, Row).map(indexRow => (
    <div key={indexRow}>
      {Range(0, Col).map(indexCol => (
        <button
          key={indexCol}
          className="square"
          type={'button'}
          onClick={() => {
            let action = setPoint(indexRow * Col + indexCol);
            dispatch(action)
          }}
        >
          {state.getIn(['board',indexRow * Col + indexCol])}
        </button>
      ))}
    </div>
  ))
}

//ChessRow = connect()(ChessRow)
export default ChessRow
