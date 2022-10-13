export const selectFilters = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export const selectIsLoadingLogIn = state => state.auth.isLoadingLogIn;

export const selectIsLoadingLogOut = state => state.auth.isLoadingLogOut;

export const selectIsLoadingRegister = state => state.auth.isLoadingRegister;
