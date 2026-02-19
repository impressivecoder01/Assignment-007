import React from 'react';

const AllCards = ({promise}) => {
    console.log(promise)
    return (
        <>
        <div className='grid grid-cols-12 py-5'>

        
        <div className='col-span-10'>
            <h1>Customer Tickets</h1>
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