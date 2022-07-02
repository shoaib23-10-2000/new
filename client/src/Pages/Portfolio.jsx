import React, { useContext } from "react";
import { Navbar } from "../components";
import Transactions from "../components/Transactions";
const Portfolio = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="flex w-full justify-center items-center gradient-bg-services ">
        <div className="items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start">
            <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
              Portfolio
            </h1>
          </div>
        </div>
      </div>
      <Transactions />
    </div>
  );
};

export default Portfolio;
