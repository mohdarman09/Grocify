import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`md:flex-1 basis-[300px] ${item.id % 2 === 0 ? "md:-mt-100" : ""}`}
      >
        <span className="flex justify-center items-center mx-auto h-12 w-12 rounded-full text-7xl bg-zinc-800 text-white outline-[2px] outline-offset-7 outline-zinc-800 outline-dotted">
          {item.number}
        </span>

        <div className="flex items-center mt-6 gap-x-3">
          <span className="flex bg-gradient-to-b h-12 w-12 text-3xl justify-center items-center rounded-full from-orange-400 to-orange-600 text-white">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-1">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[90%] mx-auto px-8 py-15">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex flex-wrap gap-y-12 items-center justify-center md:mt-70 mt-12">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader.",
    icon: <BsTruck />,
  },
];
