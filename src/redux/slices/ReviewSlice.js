import {createSlice } from '@reduxjs/toolkit';

const ReviewSlice=createSlice ({
    name:'reviewSlice',
    initialState:{
        data:[]
    },
    reducers:{
        addReview:(state,action)=>{
            let newData = [...state.data,action.payload];
            state.data=newData;
        },
        deleteReview:(state,action)=>{
            let id=action.payload;
            state.data=state.data.filter((item)=> item.id!==id)
        }
    }
})

export default ReviewSlice.reducer;
export const {addReview,deleteReview} = ReviewSlice.actions;