import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');

    const handleBudgetChange = (event) => {
        const inputValue = parseFloat(event.target.value);

        if (!isNaN(inputValue) && inputValue <= 20000) {
            setNewBudget(inputValue);
            setError(''); // Clear any previous error
        } else {
            setError('Budget must be less than or equal to 20,000');
            // Show an alert here (you can customize the styling)
            alert('Budget must be less than or equal to 20,000');
        }
    };

    return (
        <div className='alert alert-secondary d-flex align-items-center'>
            <div className='me-2'>Budget: £</div>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
            {error && <div className="text-danger">{error}</div>}
        </div>
    );
};

export default Budget;
