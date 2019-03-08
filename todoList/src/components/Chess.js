import React from 'react'
import {Range} from 'immutable'
import ChessRow from './ChessRow'
const Row = 9;
const Chess = () =>(
  <div>
    {Range(0,Row).map(index=>
      < ChessRow key={index}/>)}
  </div>
)

export default Chess
