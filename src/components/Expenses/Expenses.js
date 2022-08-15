import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
const Expenses = (props) => {
  const [initialYear, selectedYear] = useState("2020");
  const expenses = props.expenses;
  const filterHandler = (yearFilter) => {
    console.log("expenseFilterrr", yearFilter);
    selectedYear(yearFilter);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={initialYear} onExpenseFilter={filterHandler} />
        <ExpenseItem
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[1].date}
          title={expenses[1].title}
          amount={expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[2].date}
          title={expenses[2].title}
          amount={expenses[2].amount}
        ></ExpenseItem>{" "}
        <ExpenseItem
          date={expenses[3].date}
          title={expenses[3].title}
          amount={expenses[3].amount}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
