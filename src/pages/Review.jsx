import React from "react";
import ReviewCard from "../componets/ReviewCard";
import ReviewInput from "../componets/ReviewInput";
import {useSelector} from 'react-redux';
import Error from "../componets/Error";
const Review = () => {
    const data = useSelector(state=>state.reviewReducer.data)
  return (
    <section className="flex flex-col min-h-screen w-full justify-center items-center gap-2 bg-gray-800 p-4">
      <h1 className=" text-2xl font-bold mt-5 text-white">Review Application</h1>
      {/* submit field of review */}
     <ReviewInput/>
      {/* all reviews */}
      <div className="md:w-2/3 w-full mt-4 shadow-sm shadow-slate-950  rounded-sm px-4 py-2 flex flex-col gap-4 justify-center items-center ">
        <h2 className="font-semibold text-white text-xl w-fit border-b border-white">Reviews</h2>
        {
            data.length>0 ?
            data?.map((item)=> <ReviewCard key={item.id} data={item} />): <Error/>
        }
      </div>
    </section>
  );
};

export default Review;
