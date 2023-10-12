import React from "react";
import TransitionEffect from "../../components/TransitionEffect";
const index = () => {
  return (
    <section className="w-full h-[80vh] p-3">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 w-full h-full">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <h3 className="lg:w-[350px]">Sign Up to book your appointment</h3>
            <p>If you have already have an account you can login Login Here!</p>
          </div>

          <div className="">

          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
