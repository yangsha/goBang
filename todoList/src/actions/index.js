let nextTodoId = 0;
export const addTodo = text =>{
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export const setPoint = position =>{
  return {
    type:'SET_POINT',
    position
  }
}
export const gameStart  = state=>{
  return {
    type:'GAME_START',
    state
  }
}
