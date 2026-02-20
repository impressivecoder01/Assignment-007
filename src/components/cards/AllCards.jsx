import React, { use, useState } from 'react';
import CustomerCard from './CustomerCard';
import Hero from '../Hero';

const AllCards = ({promise}) => {
    const data = use(promise)
    console.log(data)
    const [status, setStatus] = useState([])
    const handleTaskStatus = (taskStatus) => {
        const currentStatus = [...status, taskStatus]
        setStatus(currentStatus)
    }
    console.log(status)
    return (
        <>
        <div>
            <Hero status={status}></Hero>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 py-5'>

        
        <div className='col-span-10'>
            <h1 className='font-semibold text-2xl'>Customer Tickets</h1>
            <div className=''>
{
                data.map(item => <CustomerCard handleTaskStatus={handleTaskStatus} key={item.id} item={item}></CustomerCard>)
            }
            </div>
            
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Task Status</h1>
            <div className='shadow-2xl cursor-pointer border rounded-2xl my-2 '>

            </div>
        
            <h1 className='font-bold text-2xl'>Resolved Task</h1>
            <div className='shadow-2xl cursor-pointer border rounded-2xl my-2 '>

            </div>
        </div>
        </div>
        </>
        
        
    );
};

export default AllCards;