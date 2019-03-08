import React from 'react'
import {Range} from 'immutable'
import './ChessRow.css'

const Col = 9;
const ChessRow = ()=> (
  <div>
    {Range(0,Col).map(
      index=> (
        <button
          key={index}
          className="button"
        >

        </button>
      )
    )}
  </div>
)

export default ChessRow
