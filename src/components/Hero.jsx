import React from 'react';
// import pic1 from '/vector1.png'
// import pic2 from '/vector2.png'
const Hero = ({status,taskSolve}) => {
    return (
        <div className='flex justify-between gap-1 items-center'>
            <div className='w-1/2 text-center' style={{
                background : "linear-gradient(#ffffff90, #FCB700), url('/vector1.png')"
            }}>
                <h1 className='text-2xl font-bold'>In-Progress</h1>
                <h1 className='text-2xl font-semibold'>{status.length}</h1>
            </div>
            <div className='w-1/2 text-center' style={{
                background : "linear-gradient(#ffffff90, #FCB700), url('/vector2.png')"
            }}>
                <h1 className='text-2xl font-bold'>Resolved</h1>
                <h1 className='text-2xl font-semibold'>{taskSolve.length}</h1>
            </div>
        </div>
    );
};

export default Hero;