import { configureStore } from '@reduxjs/toolkit'
import { appstoreSice } from './appstore/appstoreSice'
import { authstoreSlice } from './auth/authstoreSlice'

export const store = configureStore({
    reducer: {

        appstore: appstoreSice.reducer,
        authstore: authstoreSlice.reducer,
    },
})
