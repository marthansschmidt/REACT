import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
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
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))
      ) : (
        <p className="expenses__fallback">No expenses found for this year.</p>
      )}
    </div>
  );
};

export default Expenses;
