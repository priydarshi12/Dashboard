


import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const DonutChart = ({ percent,title }) => {
  const data = [
    { name: "Covered", value: percent, color: "#22d6aa" },
    { name: "Rest", value: 100 - percent, color: "#d3f7ee" },
  ];

  const sum = data.reduce((acc, item) => acc + item.value, 0);
  const centerText = `${percent}%`;

  return (
    <div style={{ textAlign: "center" }}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          cx={75}
          cy={75}
          startAngle={90}
          endAngle={-270}
          innerRadius={40}
          outerRadius={50}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              innerRadius={entry.innerRadius}
              outerRadius={entry.outerRadius}
            />
          ))}
          <Label value={centerText} position="center" fontSize={20} fontWeight="bold" />
        </Pie>
      </PieChart>
      <div style={{ fontSize: "14px", color: "#9f9f9f" , fontWeight:"500", marginTop: "-15px"}}>
        <span >{title}</span>
      </div>
    </div>
  );
};

export default DonutChart;
