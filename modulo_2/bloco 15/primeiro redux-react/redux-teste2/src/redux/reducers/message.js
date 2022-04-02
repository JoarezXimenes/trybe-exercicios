const INITIAL_STATE = {
  text: 'funfou mas não mudou',
}

const message = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANGE_TEXT':
      return{
        ...state,
        text: action.value
      }
    default:
     return state;
  }
 }
 
 export default message;