import React from 'react';
// import pic1 from '/vector1.png'
// import pic2 from '/vector2.png'
const Hero = () => {
    return (
        <div className='flex justify-between items-center'>
            <div style={{
                background : "linear-gradient(#ffffff90, #FCB700), url('/vector1.png')"
            }}>
                <h1>In-Progress</h1>
                <h1>0</h1>
            </div>
            <div style={{
                background : "linear-gradient(#ffffff90, #FCB700), url('/vector2.png')"
            }}>
                <h1>Resolved</h1>
                <h1>0</h1>
            </div>
        </div>
    );
};

export default Hero;