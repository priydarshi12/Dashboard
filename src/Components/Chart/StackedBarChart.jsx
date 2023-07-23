import React  , {useRef} from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const StackedBarChart = ({width}) => {
  // Sample data
  const data = [
    { name: "20", x: 27, y: 27, z: 27 },
    { name: "", x: 22, y: 25, z: 40 },
    { name: "25", x: 23, y: 27, z: 50 },
    { name: "", x: 22, y: 35, z: 55 },
    { name: "30", x: 22, y: 35, z: 65 },
    { name: "", x: 22, y: 35, z: 75 },
    { name: "35", x: 25, y: 35, z: 85 },
    { name: "", x: 22, y: 35, z: 95 },
    { name: "40", x: 22, y: 35, z: 100 },
    { name: "", x: 22, y: 35, z: 110 },
    { name: "60", x: 22, y: 35, z: 150 },
    { name: "", x: 22, y: 35, z: 200 },
    { name: "65", x: 22, y: 35, z: 242 },
  ];
  const customTickFormatter = (value) => `$${value}`;
  
  return (

    <BarChart width={width} height={180} data={data}>
      <CartesianGrid vertical={false}  strokeDasharray="7 3" stroke="#c0c0c0"
      
      />
      <XAxis dataKey="name" tick={[20,25,30,35,40,60,65]} tickLine={false} axisLine={false}/>
      <YAxis domain={[0, 300]} ticks={[0, 100, 200, 300]} axisLine={false} tickLine={false} tickFormatter={customTickFormatter}/>
      <Bar dataKey="x" stackId="a" fill="#0800a3" />
      <Bar dataKey="y" stackId="a" fill="#4935ff" />
      <Bar dataKey="z" stackId="a" fill="#85afff" />
    </BarChart>
  );
};

export default StackedBarChart;


