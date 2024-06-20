"use client"
import React, { useState } from 'react'

const Input = ({ label, type, placeholder, value, onChange, errMsg, max, name }) => {
    return (
        <>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                {label}
            </label>
            <input type={type} placeholder={placeholder} maxLength={max} name={name} value={value} onChange={(e) => onChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            <p className='text-red-500'>{errMsg}</p>
        </>
    )
}
const ValidateFn = () => {
    const [state, setState] = useState({
        formsInputs: { first: "", last: "" },
        err: { first: "", last: "" },
    })
    const { formsInputs, err } = state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => {
            return {
                ...prev,
                formsInputs: {
                    ...prev.formsInputs, [name]: value
                },
            }
        })
        return validatorFn()
    }

    const handleSubmit = () => {
        let res = true;
        if (res) {
            return validatorFn()
        } else {
            alert("submit")
        }
    }
    const validatorFn = () => {
        console.log()
        let valid = true;
        // valid = !!v.toString()?.length
        for (let i in formsInputs) {
            console.log(i, formsInputs[i])
            setState((prev) => {
                return { ...prev, err: { ...prev.err, [i]: formsInputs[i] === "" ? "Required" : "" } }
            })
        }
        return valid
    }
    const formData = [
        {
            label: "First Name",
            name: "first",
            placeholder: "First Name",
            value: formsInputs.first,
            errMsg: err.first
        },
        {
            label: "Last Name",
            name: "last",
            placeholder: "Last Name",
            value: formsInputs.last,
            errMsg: err.last
        }
    ]
    return (
        <main>
            {/* <div className="w-full px-3 mb-6 md:mb-0">
                <Input onChange={(e) => setData(e)} value={pass} max="1" name="first" placeholder="select" />
                <button className='border px-5 py-1 rounded-lg' onClick={() => { addPass() }}>ADD</button>
            </div>
            {nextPage === "passengers" && <> */}
            <section>
                {formData?.map((item, i) => (
                    <div key={i} >
                        {/* <button>view</button> */}
                        <div className='flex'>
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <Input onChange={(e) => handleChange(e)} value={item?.value} name={item?.name} placeholder={item?.placeholder} label={item?.label} errMsg={item?.errMsg} />
                            </div>
                        </div>
                        {/* {i >= 1 && <div>
                            <button className='bg-red-600 text-white border px-5 py-1 rounded shadow outline-none' onClick={() => handleRemove(i)}>Remove</button>
                        </div>} */}
                    </div>
                ))}
            </section>
            <div className='flex w-1/2 gap-5'>
                <div>
                    <button className='border px-5 py-1 rounded shadow outline-none' onClick={() => handleSubmit()}>Submit</button>
                </div>
                {/* {pass >= formsInputs?.length + 1 && <div>
                    <button className='border px-5 py-1 rounded shadow outline-none' onClick={() => handleAdd()} disabled={state?.formsInputs?.length === 5}>Add City</button>
                </div>} */}

            </div>
            {/* </>} */}
        </main >
    )
}

export default ValidateFn