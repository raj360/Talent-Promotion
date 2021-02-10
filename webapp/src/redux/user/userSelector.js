import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

export const selectorIsLoggedIn = createSelector([selectUser],(user) => user.isLoggedIn)

export const selectorUser = createSelector([selectUser],(user) => user.user)

export const selectorUserDetails = createSelector([selectUser],(user) => user.userDetails)

export const selectorCategories = createSelector([selectUser],(user) => user.categories)