import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  };

  const toggleFormHandler = () => {
    setIsFormVisible(!isFormVisible);
  };

  const cancelHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button className="new-expense__btn-add" onClick={toggleFormHandler}>
          Add New Expense
        </button>
      )}
      {isFormVisible && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
