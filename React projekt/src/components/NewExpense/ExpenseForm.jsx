import { useState, useRef } from 'react';
import Error from '../UI/Error';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateInputRef = useRef();

  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (enteredTitle.trim().length === 0 || enteredPrice.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid title or amount or date (non-empty values)'
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    titleInputRef.current.value = '';
    priceInputRef.current.value = '';
    dateInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <Error title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" ref={titleInputRef} />
          </div>

          <div className="new-expense__control">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              ref={priceInputRef}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2023-01-01"
              max="2025-12-31"
              ref={dateInputRef}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.onCancel} className="new-expense__btn-cancel">Cancel</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
