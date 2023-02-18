import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.review}</p>
      </div>
      <div className="flex items-center  p-5">
      <div class="avatar">
        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-10">
          <img className="" src={review.img}/>
        </div>
      </div>
      <div>
        <h4 className="text-xl">{review.name}</h4>
        <p>{review.location}</p>
      </div>
      </div>
    </div>
  );
};

export default Review;
