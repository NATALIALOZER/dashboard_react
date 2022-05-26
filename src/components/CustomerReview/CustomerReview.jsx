import React from "react";
import Chart from "react-apexcharts";
import { customerChartData } from "../../Data/Data";


const CustomerReview = () => {
  return <div className="CustomerReview">
        <Chart options={customerChartData.options} series={customerChartData.series} type="area" />
  </div>;
};

export default CustomerReview;