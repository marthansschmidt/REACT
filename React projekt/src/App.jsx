import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 'e1', title: 'New Book', price: 39.99, date: new Date(2023, 4, 23) },
    { id: 'e2', title: 'New jeans', price: 99.99, date: new Date(2024, 3, 27) },
    { id: 'e3', title: 'New bag', price: 79.99, date: new Date(2025, 7, 19) },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
