import React from 'react'
import { MdDelete } from "react-icons/md";
import {useDispatch} from 'react-redux';
import { deleteReview } from '../redux/slices/ReviewSlice';
const ReviewCard = ({data}) => {
    const {title,rating,desc,id}=data;
    const dispatch = useDispatch();
    const hanldeDeleteBtn=(i)=>{
        dispatch(deleteReview(i))
    }
  return (
    <div className="w-full flex justify-between items-center gap-4 bg-white p-1 px-2 rounded-sm">
        <div className=" flex-1 p-2 flex flex-col gap-2">
            <p className='border-b border-slate-300  font-semibold'>{title}</p>
            <p className='border-b border-slate-300  text-sm font-semibold'>Rating is {rating}</p>
            <p className='border-b border-slate-300  text-sm font-semibold'>{desc}</p>
        </div>
        <button
        onClick={()=>{hanldeDeleteBtn(id)}}
        className="text-lg bg-red-600 p-2 rounded-sm text-white hover:scale-95 duration-200" > <MdDelete/> </button>
        </div>
  )
}

export default ReviewCard