import React from 'react';

const ResolveCard = ({item}) => {
    return (
        <div className='bg-white shadow-2xl p-5 space-y-2 my-3 rounded-2xl'>
            <h1>{item.title}</h1>
        </div>
    );
};

export default ResolveCard;