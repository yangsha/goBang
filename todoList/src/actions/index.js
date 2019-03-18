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
export const resetGame = state =>{
  return{
    type:'GAME_RESET',
    state
  }
}
