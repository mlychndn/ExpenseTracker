import React, { useState } from "react";

import "./NewExpenseButton.css";
import InputForm from "../ExpenseForm/InputForm";

const NewExpenseButton = (props) => {
  const [initialFlag, setFlag] = useState(props.show);

  const addExpenseHAndler = (event) => {
    event.preventDefault();

    setFlag(false);
  };

  const expenseSavedHandler = (expense) => {
    // console.log("expense", expense);
    const modifiedExpenses = {
      id: `e${String(Math.floor(Math.random() * 10))} `,
      ...expense,
    };
    props.onExpenseAdded(modifiedExpenses);
  };

  const cancelButtonHandler = (flagVal) => {
    setFlag(flagVal);
  };

  if (initialFlag) {
    return (
      <div>
        <button className="new-expense__actions" onClick={addExpenseHAndler}>
          Add New Expense
        </button>
      </div>
    );
  }

  if (!initialFlag) {
    return (
      <InputForm
        flag={initialFlag}
        onNewExpenseSaved={expenseSavedHandler}
        onCancelEvent={cancelButtonHandler}
      ></InputForm>
    );
  }
};

export default NewExpenseButton;
