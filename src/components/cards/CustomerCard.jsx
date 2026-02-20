import React from 'react';

const CustomerCard = ({item,handleTaskStatus}) => {
    // console.log(item)
    return (
        <div onClick={() => handleTaskStatus(item)} className='shadow-2xl cursor-pointer border rounded-2xl my-2 p-6'>
            <h1 className='font-bold text-2xl'>{item.title}</h1>
            <p>{item.description}</p>
            <div className='flex justify-between'>
            <p >{item.priority}</p>
            <div className='flex items-center gap-2'>
            <p className='font-semibold'>{item.customer}</p>
            <p>{item.createdAt}</p>

            </div>

            </div>
        </div>
    );
};

export default CustomerCard;