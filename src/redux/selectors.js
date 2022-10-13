export const selectFilters = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshingUser = state => state.auth.isRefreshingUser;
