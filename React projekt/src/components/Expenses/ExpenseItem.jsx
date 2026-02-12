import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.data.title);
  const [isExpanded, setIsExpanded] = useState(false);

  const clickHandler = () => {
    console.log('Clicked!');
    setTitle(`Updated by click ${title}`);
  };

  const toggleExpandHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.data.price}€</div>
      </div>

      <button className="expense-item__toggle" onClick={toggleExpandHandler}>
        {isExpanded ? '▼' : '▶'}
      </button>

      {isExpanded && (
        <div className="expense-item__details">
          <button onClick={clickHandler} className="expense-item__btn-update">
            Update Title
          </button>
        </div>
      )}
    </Card>
  );
};

export default ExpenseItem;
