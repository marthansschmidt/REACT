import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === filteredYear.toString()
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpensesList
        filteredExpenses={filteredExpenses}
        isLoading={props.isLoading}
      />
    </Card>
  );
};

export default Expenses;
