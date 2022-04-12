import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Expenses = createContext({
  expenses: [],
  deleteExpense: () => {},
});

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteExpense = (id) => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/super_admin/expenses/${id}`,
      config
    );

    const filteredExpenses = expenses.filter(
      (expense) => expense.expense_id !== id
    );
    setExpenses(filteredExpenses);
  };

  useEffect(() => {
    const getExpenses = async () => {
      const config = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/super_admin/expenses',
        config
      );

      const resData = res.data.data;
      console.log(resData);
      setExpenses(resData);
    };

    getExpenses();
  }, []);

  console.log(expenses);

  const expenseValue = {
    expenses: expenses,
    deleteExpense: deleteExpense,
  };

  return <Expenses.Provider value={expenseValue}>{children}</Expenses.Provider>;
};

export default ExpenseProvider;
