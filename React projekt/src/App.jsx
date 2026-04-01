import { useState, useEffect, Fragment } from 'react';
import Error from './components/UI/Error';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3005/expenses');
        const responseData = await response.json();
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed fetching expenses data, please try again later.'
        });
        setShowError(true);
      }
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    try {
      const response = await fetch('http://localhost:3005/add-expense', {
        method: 'POST',
        body: JSON.stringify(expense),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error('Failed saving data');
      }
      setExpenses([expense, ...expenses]);
    } catch (error) {
      setError({
        title: 'An error occurred!',
        message: 'Failed saving expenses data, please try again later.'
      });
      setShowError(true);
    }
  };

  const errorHandler = () => {
    setShowError(false);
  };

  return (
    <Fragment>
      {showError && <Error title={error.title} message={error.message} onConfirm={errorHandler} />}
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} isLoading={isFetching} error={error} />
      </div>
    </Fragment>
  );
};

export default App;
