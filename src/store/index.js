import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger'
import authReducer from "./slices/authSlice"

const reducer = {
    auth: authReducer,
}

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        preloadedState,
        devTools: true,
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store
}