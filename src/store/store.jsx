import {configureStore} from '@reduxjs/toolkit'
import AccessTokenSlice from './AccessTokenSlice'


const store=configureStore({
    reducer:{
        accessToken:AccessTokenSlice
    }
})
export default store