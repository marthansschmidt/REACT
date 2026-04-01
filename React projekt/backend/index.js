import fs from 'node:fs/promises';
import express from 'express';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/expenses', async (req, res) => {
  const fileContent = await fs.readFile('./data/expenses.json');
  const expensesData = JSON.parse(fileContent);
  res.status(200).json({ expenses: expensesData });
});

app.post('/add-expense', async (req, res) => {
  const expense = req.body;
  const fileContent = await fs.readFile('./data/expenses.json');
  const expensesData = JSON.parse(fileContent);
  const newExpenses = [expense, ...expensesData];
  await fs.writeFile('./data/expenses.json', JSON.stringify(newExpenses));
  res.status(201).json({ message: 'Expense added!' });
});

app.listen(3005, () => {
  console.log('backend server connected');
});
