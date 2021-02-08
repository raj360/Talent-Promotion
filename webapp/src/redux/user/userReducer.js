import UserActionTypes from './userActionTypes';

const initialState ={
  user:{},
  isLoggedIn:false,
}

const userReducer = (state=initialState,action) => {
  switch(action.type){
    case UserActionTypes.SAVE_USER_DATA:
      return {...state,user:action.payload,isLoggedIn:true};
      case UserActionTypes.LOG_OUT_USER:
        return {...state,user:{},isLoggedIn:false};
        default:
          return state;
  }
};

export default userReducer;