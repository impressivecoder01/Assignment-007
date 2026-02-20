import React from 'react';

const TaskStatusCard = ({task}) => {
    console.log(task)
    return (
        <div className='bg-white shadow-2xl p-5 space-y-2 my-3 rounded-2xl'>
            <h1 className='text-2xl font-semibold'>{task.title}</h1>
            <button className='bg-green-400 w-full rounded-xl py-2 text-white font-semibold cursor-pointer text-xl'>Complete</button>
        </div>
    );
};

export default TaskStatusCard;