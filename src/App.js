import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

import Remaining from './components/Remaining';

import ExpenseTotal from './components/ExpenseTotal';

import ExpenseList from './components/ExpenseList';

import ExpenseItem from './components/ExpenseItem';


import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                                         // Budget component
                    <div className='col-sm'>
                    <Budget />
                </div>   /* Add Budget component here */
                        }        

                        {
                            /* Add Remaining component here*/
                     
                    <div className='col-sm'>
                    <Remaining />
                </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                                             //ExpenseTotal component
                    <div className='col-sm'>
                    <ExpenseTotal />
                </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            <div className='col-sm'>
                            <ExpenseList />
                        </div> 

                        }         

                        {
                            /* Add ExpenseItem component here */
                            <div className='col-sm'>
                            <ExpenseItem />
                        </div> 
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className='col-sm'>
                            <AllocationForm />
                        </div> 
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
