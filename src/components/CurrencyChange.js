import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const CurrencyChange = () => {
    const {dispatch} = useContext(AppContext);

    function currencyEventHandler(val) {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }

    return (
            <label className="input-group-text" style={{backgroundColor: "lightgreen"}}>
                Currency (
                <select
                    className="custom-select"
                    onChange={(event) => currencyEventHandler(event.target.value)}
                    style={{backgroundColor: "lightgreen"}}
                >
                    <option defaultValue style={{color: "black"}} value="£" name="pound">£ Pound</option>
                    <option style={{color: "black"}} value="$" name="dollar">$ Dollar</option>
                    <option style={{color: "black"}} value="€" name="euro">€ Euro</option>
                    <option style={{color: "black"}} value="₹" name="rupee">₹ Rupee</option>
                </select>
                )
            </label>
    )
}

export default CurrencyChange;
