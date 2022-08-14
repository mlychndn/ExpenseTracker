import "./inputForm.css";

const InputForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="1" steps="0.1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-08-06" max="2022-12-31" />
        </div>
        <button className="new-expense__actions" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputForm;
