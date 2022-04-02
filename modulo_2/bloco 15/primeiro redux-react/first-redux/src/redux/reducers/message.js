const INITIAL_STATE = {
  message: 'funfou mas não mudou'
}

const message = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'CHANGE-MESSAGE':
      return {
        ...state,
        message: action.message,
      };
      default: 
      return state;
  }
}

export default message;
