import React from "react";

import Card from "../UI/Card";
import ExpenseList from "../Expenses/ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  // console.log("malay", props.expenses);
  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={props.expenses} />
        <ExpenseList items={props.expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
