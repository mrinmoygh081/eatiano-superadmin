import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Expenses } from '../../context/expensesContext';

const ExpenseItem = ({ expense }) => {
  const expensesCtx = useContext(Expenses);

  const deleteExpense = () => {
    expensesCtx.deleteExpense(expense.expense_id);
  };

  return (
    <div className='p-6 transition-all duration-200 rounded-lg shadow-lg bg-secondary hover:-translate-y-3'>
      <h6 className='mb-5 text-xl leading-relaxed text-center text-gray-100 lg:leading-relaxed lg:mb-8 lg:text-2xl'>
        Expense Name:{' '}
        <span className='font-medium text-brand-text'>{expense.name}</span>
      </h6>
      <h6 className='mb-4 text-center text-gray-200'>
        Expense Amount:{' '}
        <span className='font-medium text-cta-dark'>{expense.amount}</span>
      </h6>
      <p className='mb-4 text-sm font-light leading-relaxed text-center text-gray-300 md:mb-5'>
        Time Period For Expense:{' '}
        <span className='font-normal text-gray-100'>
          {expense.time_period} days
        </span>
      </p>

      <h6 className='mb-4 font-medium text-center text-gray-200'>
        Created At: {expense.created_at}
      </h6>

      <button
        className='text-brand-text hover:text-red-600'
        onClick={deleteExpense}
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
