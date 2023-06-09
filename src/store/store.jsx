import {configureStore} from '@reduxjs/toolkit'

import InstaSlice from './InstaSlice'


const store=configureStore({
    reducer:{
        insta:InstaSlice
    }
})
export default store