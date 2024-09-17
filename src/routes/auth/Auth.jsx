import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
    return (
        <>
            <div className='min-h-screen flex items-center justify-center'>
                <div className='max-w-[400px] w-full p-4 shadow-2xl'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Auth