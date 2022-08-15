import InputForm from "./InputForm";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const expenseSavedHandler = (expense) => {
    const modifiedExpenses = {
      id: `e${String(Math.floor(Math.random() * 10))} `,
      ...expense,
    };
    props.onExpenseAdded(modifiedExpenses);
  };
  return (
    <div className="new-expense">
      <InputForm onNewExpenseSaved={expenseSavedHandler}></InputForm>
    </div>
  );
};

export default ExpenseForm;
