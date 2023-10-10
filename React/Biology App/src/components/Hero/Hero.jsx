import React from "react";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero bg-white flex h-[50vh]">
      <div className="flex-1 pt-[100px] ps-[100px]">
        <h2 className="text-[58px] hero-title font-bold leading-[70px]">
          The Place Where You’ll
          <br /> Be Appriciated
        </h2>
        <p className="text-[24px] w-[600px] mt-4 leading-[35px]">
          Make teaching biology easier and more effective with our teacher
          platform
        </p>
      </div>
      <div className="landing flex-1"></div>
    </section>
  );
};

export default Hero;
