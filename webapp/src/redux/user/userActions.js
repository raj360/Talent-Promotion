import UserActionTypes from './userActionTypes';

export const saveUserData = (data) => ({type: UserActionTypes.SAVE_USER_DATA, payload: data});

export const logOutUser = (data) =>({type: UserActionTypes.LOGOUT, payload:data});

