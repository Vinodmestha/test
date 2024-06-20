"use client"
import React, { useRef, useState } from 'react'
const Input = ({ label, type, placeholder, value, onChange, errMsg, max, name, onkeydown, innerRef }) => {
    return (
        <>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                {label}
            </label>
            <input autoComplete='off' ref={innerRef} type={type} placeholder={placeholder} maxLength={max} name={name} value={value} onChange={onChange} onKeyUp={onkeydown} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            <p className='text-red-500'>{errMsg}</p>
        </>
    )
}
export default function OTP() {
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const inputRef = useRef([])

    const handleChange = (v, i) => {

        const otpNew = [...otp]
        otpNew[i] = v
        setOtp(otpNew)
        if (v !== "" && i < 4 - 1) {
            inputRef.current[i + 1].focus();
            console.log(inputRef.current[i + 1].focus())
        }
    }
    const handleKeyDown = (e, i) => {
        if (e.key === "Backspace" && !e.target.value && i > 0) {
            inputRef.current[i - 1].focus();
        }
        if (e.key === "Enter" && e.target.value && i < 4 - 1) {
            inputRef.current[i + 1].focus();
        }
    }
    return (
        <div className='flex gap-5'>
            {otp.map((item, i) => {
                return (
                    <div className='w-14' key={i}>
                        <Input onkeydown={(e) => handleKeyDown(e, i)} onChange={(e) => handleChange(e.target.value, i)} value={item} max="1" name="first" type="text" innerRef={(el) => inputRef.current[i] = el} />
                    </div>
                )
            })}
        </div>
    )
}
