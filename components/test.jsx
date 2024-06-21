"use client"
import React, { useState } from 'react'
import { details } from './db/db'

export default function Test() {
    let passenger = 3
    const [selected, setSelected] = useState([])
    const handleSelect = (item) => {
        if (passenger === selected?.length && !selected?.includes(item?.SeatNumber) && selected?.length - 1) {
            selected.pop()
        }
        if (selected?.includes(item?.SeatNumber)) {
            let filtered = selected?.filter((d) => d !== item?.SeatNumber)
            setSelected(filtered)
        } else {
            if (selected?.length < passenger) {
                setSelected([...selected, item?.SeatNumber])
            }
            // }
        }
    }
    return (
        <div>
            <div className='flex gap-5'>
                {details?.lstAirSeat?.map((childItem, i) => {
                    return (
                        <div key={i} className=''>
                            {childItem.LstRow?.map((lstItem, j) => {
                                return (
                                    <div key={j} className='flex'>
                                        {lstItem?.lstColumn?.map((col, k) => {
                                            return (
                                                <div key={k} onClick={() => handleSelect(col)} className={`flex justify-center items-center p-1 size-12 border rounded-lg ${selected?.includes(col?.SeatNumber) ? "bg-red-300" : ""} `}>
                                                    {col?.SeatNumber}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}</div>
                    )
                })}
            </div>

        </div >
    )
}
