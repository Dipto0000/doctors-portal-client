import React from "react";
import depression from "../../assets/images/Depression_releived_man.jpg";
import anxiety from "../../assets/images/anxiety_disorder.jpg";
import bipolar from "../../assets/images/bipoler_disorder.jpg";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Depression relief",
      description: "",
      img: depression,
    },
    {
      _id: 2,
      name: "Anxiety disorder",
      description: "",
      img: anxiety,
    },
    {
      _id: 3,
      name: "Bipolar Disorder",
      description: "",
      img: bipolar,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our services
        </h3>
        <h2 className="text-4xl">Services we provide</h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
