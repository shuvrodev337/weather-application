import React from "react";
import Temperature from "../../components/Temperature/Temperature";

const Homepage = () => {
  return (
    <div className="relative">
      <div className=" w-[350px] h-[600px]  rounded-3xl bg-[#5c9ce5] p-4">
<Temperature></Temperature>
      </div>
      <div className=" w-[1000px] h-[600px]  rounded-3xl absolute top-0 left-64 bg-[#e4f1ff] p-4">

      </div>
    </div>
  );
};

export default Homepage;
