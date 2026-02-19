import React, { use } from 'react';
import CustomerCard from './CustomerCard';

const AllCards = ({promise}) => {
    const data = use(promise)
    console.log(data)
    return (
        <>
        <div className='grid grid-cols-12 py-5'>

        
        <div className='col-span-10'>
            <h1>Customer Tickets</h1>
            <div className=''>
{
                data.map(item => <CustomerCard item={item}></CustomerCard>)
            }
            </div>
            
        </div>
        <div>
            <h1>Task Status</h1>
        
            <h1>Resolved Task</h1>
        </div>
        </div>
        </>
        
        
    );
};

export default AllCards;