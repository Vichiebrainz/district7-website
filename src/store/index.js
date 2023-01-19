import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger'

// We'll use redux-logger just as an example of adding another middleware
import authReducer from "./slices/authSlice"

// And use redux-batched-subscribe as an example of adding enhancers
import { batchedSubscribe } from 'redux-batched-subscribe'


const reducer = {
    auth: authReducer,
}

// const debounceNotify = _.debounce(notify => notify());

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    // enhancers: [batchedSubscribe()],
})

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batched subscribe, and devtools enhancers were composed together