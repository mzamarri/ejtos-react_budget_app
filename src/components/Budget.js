import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency} = useContext(AppContext);
    const [money, setMoney] = useState(budget);

    function budgetEventHandler(val) {
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
