import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  const handleChangeAge = (event) => {
    const newValue = event.target.value;
    setValue1(newValue);
  };
  return (
    <div className="outer-side">
      <div className="inner-side">
        <div className="upper_side">
          <h1 className="retire_side">Retierment Strategy</h1>

          <h3 className="range_head">Employee Contribution</h3>
          <div className="range_input">
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={value}
              onChange={handleChange}
              style={{
                background: `linear-gradient(to right, #88b1fe 0%, #88b1fe ${(value / 20) * 100}%, #ccc ${(value / 20) * 100}%, #ccc 100%)`,
              }}
            />
            <span className="range_value">{value}%</span>
          </div>

          <h3 className="range_head">Retirement age</h3>
          <div className="range_input">
            <input
              type="range"
              min="0"
              max="80"
              step="1"
              value={value1}
              onChange={handleChangeAge}
              style={{
                background: `linear-gradient(to right, #88b1fe 0%, #88b1fe ${(value1 / 80) * 100}%, #ccc ${(value1 / 80) * 100}%, #ccc 100%)`,
              }}
            />
            <span className="range_value">{value1}</span>
          </div>

          <hr className="hr_side"/>
          <p className="side_status">
            <span>Employer Contribution</span>
            <span>8.4%</span>
          </p>
          <p className="side_status">
            <span>Interest Rate</span>
            <span>5%</span>
          </p>
          <button className="side-btn">Update</button>
          <p className="help">View Help Docs {">"}</p>
        </div>

        <div className="lower_side">
          <p className="asking">
            Are you considering a <br />
            <span className="housing">Housing Advance?</span>
          </p>
          <h1 className="limited"> Limited time reduced interest</h1>
          <h3 className="learn">Learn More {">"}</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
