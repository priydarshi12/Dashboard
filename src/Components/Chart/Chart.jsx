import React , { useRef , useState , useEffect} from "react";
import "./Chart.css";
import { GoTriangleDown } from "react-icons/go";
import StackedBarChart from "./StackedBarChart";
import DonutChart from "./DonutChart";
const Chart = () => {
  

  

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  console.log("width is", width); 


  return (
    <div className="container-chart" >
      <div className="inner_con_chart">
        <div className="heading-ch">
          <h4 className="retire">Retirement Income</h4>
          <h3 className="start">Strarting Year 2056</h3>
        </div>
        <div className="info">
          <div className="details big">
            <h1 className="amt_det ">$300,000</h1>
            <h5 className="amt_sub_head">My Goal</h5>
            <hr className="hr_chart" />
          </div>
         
          <div className="details">
            <h1 className="amt_det">59%</h1>
            <h5 className="amt_sub_head">Goal Achieved</h5>
            <hr className="hr_chart" />
          </div>
          <div className="details">
            <h1 className="amt_det">K 300</h1>
            <h5 className="amt_sub_head">Est. Montly Income</h5>
            <hr className="hr_chart" />
          
          </div>
        </div>
        <h3 className="contri">Contributions Overtime</h3>

        <div className="bar_details">
          <section className="legends">
            <span className="legends_details">
              <span
                className="color_emp"
                style={{ backgroundColor: "#0800a3" }}
              ></span>
              <span className="desig">Employer :</span>
              <span>K 73,500</span>
            </span>
          </section>
          <section className="legends">
            <span className="legends_details">
              <span
                className="color_emp"
                style={{ backgroundColor: "#4935ff" }}
              ></span>
              <span className="desig">Employee :</span>
              <span>K 52,500</span>
            </span>
          </section>
          <section className="legends">
            <span className="legends_details">
              <span
                className="color_emp"
                style={{ backgroundColor: "#85afff" }}
              ></span>
              <span className="desig">Total Interest :</span>
              <span>K 244,313</span>
            </span>
          </section>
        </div>
        <section className="bar" >
          {width < 500 ? (<StackedBarChart width = {300}/>) : <StackedBarChart width ={630}/>}
        </section>
        <section className="pie_section">
          <h3 className="compare_head">How do I compare to my peers?</h3>
          <h4 className="compare_sub">
            These numbers represent current goal achievement
          </h4>
          <div className="pie_chart">
            <div className="pie_options">
              <span className="option_head">
                Age:
                <span className="option">
                  Under 30 <GoTriangleDown />
                </span>
              </span>
              <hr />
              <span className="option_head">
                Salary:
                <span className="option">
                  K 20 - K 30
                  <GoTriangleDown />
                </span>
              </span>
              <hr />
              <span className="option_head">
                Gender:
                <span className="option">
                  Male <GoTriangleDown />
                </span>
              </span>
            </div>
            <div className="chart">
            <div className="average">
              <DonutChart percent={78} title={"Average"} />
              </div>
              <DonutChart percent={95} title={"Top"}/>
              <DonutChart percent={59} title={"Me"}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chart;
