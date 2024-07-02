"use client"

import React from 'react'
import { useAuth } from '@/Context/AuthContext';

export default function profile() {
    let { user } = useAuth();
    return (
        <div className='max-w-screen-xl mx-auto py-20'>
            <div>
                <h4 className='text-3xl'>User Profile</h4>
                <h5 className='text-lg pt-5'>User Name : {user?.username}</h5>
            </div>
        </div>
    )
}
