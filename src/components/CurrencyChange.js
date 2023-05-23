import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const CurrencyChange = () => {
    const {currency} = useContext(AppContext);

    function currencyEventHandler() {

    }

    return (
        <div className='alert alert-secondary'>
            <label className="input-group-text">
                Currency (
                <select
                    className="custom-select"
                >
                    <option defaultValue value="£" name="pound">£ Pound</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="rupee">₹ Rupee</option>
                </select>
                )
            </label>
        </div>
    )
}

export default CurrencyChange;