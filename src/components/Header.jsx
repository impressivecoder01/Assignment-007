import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto items-center py-10'>
            <div>
                <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
            </div>
            <div>
                <ul className='flex items-center gap-5'>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                    <li className='bg-linear-to-r from-[#422AD5] to-gray-500  text-white px-2 py-2 rounded-2xl'>+ New Ticket</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;