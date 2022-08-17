import React from "react";

import Card from "../UI/Card";
import ExpenseList from "../Expenses/ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  // console.log("expense", props.expenses);
  return (
    <div>
      <Card className="expenses">
        <ExpenseList items={props.expenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
