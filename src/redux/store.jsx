import { configureStore} from '@reduxjs/toolkit'

import authReducer from './authGoogleSlice'

export default configureStore({
    reducer: {
        auth: authReducer
    }
})