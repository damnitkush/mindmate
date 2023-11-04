// import React from 'react'

// import { useState } from "react";
/* eslint-disable react/prop-types */
import { CiCreditCard1 } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowUpShort } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { useContext } from "react";
import Theme from "../../context/darkModeContext";
const data = [
  { name: "June", uv: 400, pv: 2400, amt: 2000 },
  { name: "July", uv: 700, pv: 4200, amt: 2500 },
  { name: "August", uv: 100, pv: 2000, amt: 3400 },
  { name: "September", uv: 300, pv: 3400, amt: 1400 },
  { name: "October", uv: 1000, pv: 2800, amt: 2200 },
];
const getIntroOfPage = (label) => {
  if (label) {
    return `${label} 2023`;
  }
  return "";
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="border w-48 bg-white dark:bg-slate-800 dark:border-slate-600 rounded-lg px-4 py-2 text-xs flex flex-col gap-2">
        <span className="flex text-2xl items-center font-bold dark:text-slate-50">
          <FaRupeeSign className="text-xl" />
          {`${payload[0].value}`}
        </span>
        <div className="flex justify-between">
          <span className="text-slate-400">{getIntroOfPage(label)}</span>
          <span className="text-green-600 flex items-center">
            <BsArrowUpShort className="text-lg" />
            0.25%
          </span>
        </div>
      </div>
    );
  }

  return null;
};
const Home = () => {
  const { darkMode } = useContext(Theme);

  // const [data, setData] = useState([]);
  // let data;
  // const [month, setMonth] = useState([""]);
  // const [profit, setProfit] = useState([]);
  // const [loss, setLoss] = useState([]);
  return (
    <>
      <div className="w-2/3  bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center font-medium">
            <CiCreditCard1 className="text-2xl text-slate-600 dark:text-slate-50" />
            <span className="dark:text-slate-50">Payment Insights</span>
          </div>
          <div className="flex items-center border  rounded-lg text-xs pl-2 py-1 text-slate-500 dark:text-slate-300 dark:border-slate-400 dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer duration-200">
            6 months
            <RiArrowDropDownLine className="text-xl" />
          </div>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={800}
              height={300}
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d8b4fe" stopOpacity={0.6} />
                  <stop offset="90%" stopColor="#d8b4fe" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dy={20}
                dataKey="name"
                className="text-xs"
                stroke=""
                tick={{ fill: `${darkMode ? "rgb(148 163 184)" : ""}` }}
              />

              <YAxis
                className="text-xs"
                stroke=""
                dx={-20}
                tick={{ fill: `${darkMode ? "rgb(148 163 184)" : ""}` }}
              />
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="rgb(148 163 184)"
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="amt"
                stroke="#a855f7"
                activeDot={{ r: 8 }}
                fillOpacity={1}
                fill="url(#colorUv)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Home;
