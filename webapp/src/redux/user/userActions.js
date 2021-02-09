import UserActionTypes from './userActionTypes';

export const saveUserData = (data) => ({type: UserActionTypes.SAVE_USER_DATA, payload: data});

export const logOutUser = () =>({type: UserActionTypes.LOG_OUT_USER});

export const allData = (data) => ({type: UserActionTypes.ALL_DATA, payload: data})
