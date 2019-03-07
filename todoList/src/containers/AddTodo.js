import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div  >
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
        style={{color:'#2965cc'}}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit"   >
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
