import UserActionTypes from './userActionTypes';

const initialState ={
  user:{},
  isLoggedIn:false,
  userDetails:{}
}

const userReducer = (state=initialState,action) => {
  switch(action.type){
    case UserActionTypes.SAVE_USER_DATA:
      return {...state,user:action.payload,isLoggedIn:true};
      case UserActionTypes.LOG_OUT_USER:
        return {...state,user:{},isLoggedIn:false};
      case UserActionTypes.ALL_DATA:
        return {...state,userDetails:action.payload} 
        default:
          return state;
  }
};

export default userReducer;