import React, { use, useState } from 'react';
import CustomerCard from './CustomerCard';
import Hero from '../Hero';
import TaskStatusCard from './TaskStatusCard';
import { ToastContainer, toast } from 'react-toastify';

const AllCards = ({promise}) => {
    const data = use(promise)
    // console.log(data)
    const [status, setStatus] = useState([])
    const [taskSolve, setTaskSolve] = useState([])
    const handleResolvedTask = (task)=>{
        const solvedTask = [...taskSolve, task]
        setTaskSolve(solvedTask)
        const remain = status.filter(item => item.id !== task.id)
        setStatus(remain)
        
    }
    console.log(taskSolve)
    const handleTaskStatus = (taskStatus) => {
        const isExist = status.find(item => item.id == taskStatus.id)
        if(isExist){
            toast.error('Already added', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

})
            return
        }
        const currentStatus = [...status, taskStatus]
        // console.log(isExist)
        setStatus(currentStatus)
    }
    // console.log(status)
    return (
        <>
        <div>
            <Hero taskSolve={taskSolve} status={status}></Hero>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 py-5'>

        
        <div className='col-span-10'>
            <h1 className='font-semibold text-2xl'>Customer Tickets</h1>
            <div className=''>
{
                data.map(item => <CustomerCard handleTaskStatus={handleTaskStatus} key={item.id} item={item}></CustomerCard>)
            }
            </div>
            
        </div>
        <div className='col-span-2'>
            <h1 className='font-bold text-2xl'>Task Status</h1>
            <div className='shadow-2xl cursor-pointer  rounded-2xl my-2 '>
               {
                status.map(task=> <TaskStatusCard handleResolvedTask={handleResolvedTask} key={task.id} task={task}></TaskStatusCard>)
               }
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