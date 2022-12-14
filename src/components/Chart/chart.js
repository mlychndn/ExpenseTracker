import React from "react";
import "./chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log("chart", props.dataPoints);
  const maxExpense = Math.max(...props.dataPoints.map((point) => point.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxExpense}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
