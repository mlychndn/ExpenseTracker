import NewExpenseButton from "../Expenses/NewExpenseButton";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // const expenseSavedHandler = (expense) => {
  //   const modifiedExpenses = {
  //     id: `e${String(Math.floor(Math.random() * 10))} `,
  //     ...expense,
  //   };
  //   props.onExpenseAdded(modifiedExpenses);
  return (
    <div className="new-expense">
      <NewExpenseButton
        show={true}
        onExpenseAdded={props.onExpenseAdded}
      ></NewExpenseButton>
    </div>
  );
};

export default ExpenseForm;
