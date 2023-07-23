import React from "react";
import User_img from "../../asset/user_img.jpeg";
import "./User.css";
import { GoTriangleDown } from "react-icons/go";
const User = () => {
  return (
    <div className="container-user">
      <div className="user_details">
        <div className="image">
          <img src={User_img} alt="user_image" />
        </div>
        <div className="welcome">
          <h1 className="name">Hi Mike,</h1>
          <h5 className="sal">welcome back</h5>
        </div>
      </div>
      <div className="balance">
        <div className="today_info">
          <h4 className="day">Today</h4>
          <h2 className="curr-bal">$19,892</h2>
          <h5 className="bla_sub_det">Account Balance</h5>
        </div>
        <div className="bla">
          <h3 className="otr-bal">$4,000</h3>
          <h5 className="bla_sub_det">Year-to-Date Contributions</h5>
        </div>
        <div className="bla">
          <h3 className="otr-bal">$1,892</h3>
          <h5 className="bla_sub_det">Total interest</h5>
        </div>
      </div>
      <div className="dropdown">
        I want to <GoTriangleDown />
      </div>
      <div className="lower">
        <h2 className="lower_head"> Recent Transactions</h2>
        <div>
          <section className="date">2020-08-07</section>
          <section className="tran">Withdraw Transfer to Bank-XXX11</section>
        </div>
        <hr />
        <div>
          <section className="date">2020-07-21</section>
          <section className="tran">Withdraw Transfer to Bank-XXX11</section>
        </div>
        <hr />
        <div>
          <section className="date">2020-07-16</section>
          <section className="tran">Withdraw Transfer to Bank-XXX11</section>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default User;
