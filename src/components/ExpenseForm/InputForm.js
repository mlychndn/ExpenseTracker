import React, { useState } from "react";
import "./inputForm.css";

const InputForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [flag, setFlag] = useState("props.initial");

  // console.log("initial", props);

  const titleHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({ title: event.target.value, price: "", date: "" });
    //setUserInput({ ...userInput, title: event.target.value }); // this is not 100 right way as we are depending on previous state
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const priceHandler = (event) => {
    setPrice(+event.target.value);
    // setUserInput({ title: "", price: event.target.value, date: "" });
    // setUserInput({ ...userInput, price: event.target.value });
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({ ...userInput, date: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount: price,
      date,
    };

    setTitle("");
    setPrice("");
    setDate("");

    props.onNewExpenseSaved(expenseData);
  };

  const cancelHandler = (event) => {
    // console.log("cancel button is clicked!");
    event.preventDefault();
    setFlag(true);
    props.onCancelEvent(flag);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="1"
            steps="0.1"
            value={price}
            onChange={priceHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-08-06"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
        <button className="new-expense__actions" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="new-expense__actions" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputForm;
