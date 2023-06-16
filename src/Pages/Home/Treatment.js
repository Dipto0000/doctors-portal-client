import React from "react";
import flowers from '../../assets/images/flower_gift.jpg'
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div>
      <div className="hero min-h-screen px-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={flowers}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-8">
            <h1 className="text-5xl font-bold">Exceptional mental Care, on Your Terms</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
