import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const AllocationForm = (props) => {
    const {dispatch, remaining, currency} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (cost > remaining) {
            alert("The value cannot exceeed remaining funds  £" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        }

        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{margin: '2rem'}}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelected01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="Marketing">Marketing</option>
                        <option value="Sales" name="Sales">Sales</option>
                        <option value="Finance" name="Finance">Finance</option>
                        <option value="HR" name="Human Resource">HR</option>
                        <option value="IT" name="IT">IT</option>
                        <option value="Admin" name="Admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{marginLeft: '2rem'}}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>

                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultvalue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <div style={{marginLeft: '1rem'}}>
                        {currency}
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            style={{size: 10}}
                            onChange={(event) => setCost(event.target.value)}>
                        </input>
                    </div>
                    
                        <button className="btn btn-primary" onClick={submitEvent} style={{marginLeft: '2rem'}}>
                            Save
                        </button>
                </div>
            </div>
        </div>
    );
}

export default AllocationForm;
