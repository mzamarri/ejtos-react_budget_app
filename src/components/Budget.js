import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency, expenses} = useContext(AppContext);
    const [money, setMoney] = useState(budget);

    const totalExpense = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    function budgetEventHandler(val) {
        if (val < totalExpense) {
            alert("You cannot reduce the budget value lower than the expenses");
            setMoney(money);
            return;
        }
        setMoney(val);
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <div className="input-group-prepend">
                <span>Budget: {currency}
                    <input
                        style={{display:"inline"}}
                        required='required'
                        type='number'
                        id='budget'
                        value={money}
                        onChange={(event) => budgetEventHandler(event.target.value)}
                        step={10}>
                    </input>
                
                </span>
            </div>
        </div>
    );
}

export default Budget;
