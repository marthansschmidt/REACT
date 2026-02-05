import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99,
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99,
    },
  ];

  return (
    <div className="App">
      {expenses.map((expense, idx) => (
        <ExpenseItem key={idx} data={expense} />
      ))}
    </div>
  );
};

export default App;
