import React from 'react';

const TaskStatusCard = ({task}) => {
    console.log(task)
    return (
        <div>
            <h1>{task.title}</h1>
        </div>
    );
};

export default TaskStatusCard;