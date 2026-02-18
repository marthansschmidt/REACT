import { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
