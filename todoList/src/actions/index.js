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
export const setBlackPoint = index =>{
  return {
    type:'SET_BLACK_POINT',
    index
  }
}
export const setWhitePoint = index =>{
  return {
    type:'SET_WHITE_POINT',
    index
  }
}
