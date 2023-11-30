import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addReview } from '../redux/slices/ReviewSlice';
import { nanoid } from 'nanoid';
const ReviewInput = () => {
    const [title,setTitle]=useState('');
    const [rating,setRating]=useState('');
    const [desc,setDesc]=useState('');
    const dispatch=useDispatch();
    const id = nanoid();
    // handle submit button---
    const handleSubmitBtn=(e)=>{
        e.preventDefault();
        try {
            dispatch(addReview({
                title,rating,desc,id
            }))
            console.log(title,rating,desc)
        } catch (error) {
        }finally{
            setTitle('');
            setRating('');
            setDesc('');
        }
    }
    // handleResetbtn---------
    const handleResetBtn=()=>{
      setTitle('');
      setRating('');
      setDesc('');
    }
  return (
    <div className=" w-full md:w-1/2 shadow-sm shadow-gray-600 rounded-sm px-4 py-2 flex flex-col gap-1 mt-5 bg-white">
    <p className="text-center font-semibold my-2">Give your valuable Review</p>
    <form onSubmit={handleSubmitBtn} className="flex flex-col justify-center gap-4">
      <input 
      onChange={(e)=>{setTitle(e.target.value)}}
      className="outline-none border border-gray-400 rounded-sm pl-2 bg-transparent" type="text" placeholder="Title of Review" 
      value={title}
      required />
      <div className="flex justify-between">
        <label className="font-semibold text-sm" htmlFor="rating">Rate between 1 to 5 </label>
        <input 
        value={rating}
        onChange={(e)=>{setRating(e.target.value)}}
        className="outline-none border border-gray-400 rounded-sm px-2 bg-transparent"
          type="number"
          name="rating"
          max={5}
          min={1}
          id="rating" 
          required
          placeholder="1 to 5"
        />
      </div>
      <textarea 
      value={desc}
      onChange={(e)=>{setDesc(e.target.value)}}
      className="resize-none outline-none border border-gray-400 rounded-sm pl-2 bg-transparent" name="" id="" cols="30" rows="3" placeholder="Description of Review"></textarea>

      <div className="flex gap-4 justify-center items-center">
      <input className="border-none px-4 py-1 bg-blue-700 text-white rounded-sm hover:bg-blue-900 transition-all 
      duration-100 cursor-pointer" type="reset" value={'Reset'} 
      onClick={handleResetBtn}
      />
      <input 
      className="border-none px-4 py-1 bg-green-700 
      text-white rounded-sm hover:bg-green-900 transition-all duration-100 cursor-pointer" type="submit" value={'Submit'}/>
      </div>
    </form>
  </div>
  )
}

export default ReviewInput