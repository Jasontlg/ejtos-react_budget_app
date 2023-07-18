import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const budgetLimit = 20000;
    const onChangeBudget = (event) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (budget < totalExpenses ) {
            alert(`Budget value cannot be lower than the current spending of $${totalExpenses}`)
            event.target.value = totalExpenses;
        } else {
            if ( budget > budgetLimit) {
                alert(`The budget cannot exceed $${budgetLimit}`);
                event.target.value = budgetLimit;
            }
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }


    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input 
                type="number" 
                name="budget" 
                id="budget"
                step="10"
                value={budget} 
                required
                onChange={onChangeBudget}
                />
            </span>
        </div>
    );
};
export default Budget;
