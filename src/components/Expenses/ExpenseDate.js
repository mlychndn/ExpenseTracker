import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // const expenseDate = new Date(props.date);
  const year = new Date(props.date).getFullYear();
  const month = new Date(props.date).toLocaleString("en-GB", { month: "long" });
  // console.log("month", month);
  const day = new Date(props.date).toLocaleString("en-GB", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
