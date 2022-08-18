import React, { useState } from "react";
import "./ExpenseList.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../Expenses/ExpenseItem";

const ExpenseList = (props) => {
  console.log("list", props);
  const [initialYear, selectedYear] = useState("2020");

  const filterHandler = (yearFilter) => {
    selectedYear(yearFilter);
  };
  // props.items.forEach((item) => {
  //   console.log("item", new Date(item.date));
  // });
  let expensesEl = () => {
    return props.items
      .filter(
        (expense) => new Date(expense.date).getFullYear() === +initialYear
      )
      .map((expense) => (
        <ExpenseItem
          className="expenses-list"
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ));
  };
  let printEl =
    expensesEl().length === 0 ? (
      <div className="expenses-list__fallback">Found no expenses</div>
    ) : (
      expensesEl()
    );
  return (
    <div>
      <ExpenseFilter selected={initialYear} onExpenseFilter={filterHandler} />
      {printEl}
    </div>
  );
};

export default ExpenseList;
