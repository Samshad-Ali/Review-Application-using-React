import {configureStore } from '@reduxjs/toolkit'
import ReviewSlice from './ReviewSlice'
export default configureStore({
    reducer:{
        reviewReducer:ReviewSlice
    }
})