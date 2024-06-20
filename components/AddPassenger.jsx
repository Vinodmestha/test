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
const AddPassenger = () => {
    const [state, setState] = useState({
        nextPage: "",
        pass: 1,
        formsInputs: [{ first: "", last: "" }],
        err: [{ first: "", last: "" }],
    })
    const { formsInputs, err, nextPage, pass } = state

    const setData = (e) => {
        setState((prev) => {
            return {
                ...prev,
                pass: e.target.value,
                nextPage: "",
                formsInputs: [{ first: "", last: "" }],
            }
        })
    }
    const addPass = () => {
        setState((prev) => {
            return { ...prev, nextPage: "passengers" }
        })
    }
    const handleChange = (e, i) => {
        const { name, value } = e.target;
        const list = [...formsInputs];
        list[i][name] = value;
        setState((prev) => {
            return {
                ...prev,
                formsInputs: list,
                err: err
            }
        })
        validatorFn()
    }
    const handleAdd = () => {
        setState((prev) => {
            return {
                ...prev,
                formsInputs: [...prev.formsInputs, { first: '', last: '', }]
            }
        })
    }
    const handleSubmit = () => {
        const data = [...formsInputs]
        let res = true;
        if (res) {
            // for (let i in data) {
            res = validator()
            // }
        } else {
            console.log("submit")
        }
    }
    const validatorFn = () => {
        // console.log(k, j)
        let valid = true
        const data = [...formsInputs]
        for (let i = 0; i < data?.length; i++) {
            console.log(i, data[i], data, err)
            if (data[i].first === "") {
                valid = false
                setState((prev) => {
                    return { ...prev, ...err, [err[i]]: { first: "required" } }
                })
                console.log(err)
            }
            else {
                valid = true
                setState((prev) => {
                    return { ...prev, ...err, [err[i]]: { first: "required" } }
                })
            }

        }
        return valid
    }
    console.log(err)
    const validator = (v, j) => {
        const data = [...formsInputs]
        // console.log(v, j, "inputvlue", data?.length)
        for (let i = 0; i <= data?.length; i++) {
            console.log(data, i, data[j][v], data[i])
            if (data[j][v] === "") {
                setState((prev) => {
                    return { ...prev, err: { ...err[j], [v]: "required" } }
                })
                console.log(err)
            }
            else {
                setState((prev) => {
                    return { ...prev, err: { ...err[j], first: "", last: "" } }
                })
            }

        }
    }
    return (
        <main>
            <div className="w-full px-3 mb-6 md:mb-0">
                <Input onChange={(e) => setData(e)} value={pass} max="1" name="first" placeholder="select" />
                <button className='border px-5 py-1 rounded-lg' onClick={() => { addPass() }}>ADD</button>
            </div>
            {nextPage === "passengers" && <>
                <section className=''>
                    {formsInputs?.map((item, i) => (
                        <div key={i} >
                            {/* <button>view</button> */}
                            <div className='flex'>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <Input onChange={(e) => handleChange(e, i)} value={item?.first} name="first" placeholder="First Name" label="First Name" errMsg={err.first} />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <Input onChange={(e) => handleChange(e, i)} value={item?.last} name="last" placeholder="Last Name" label="Last Name" errMsg={err.last} />
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
                    {pass >= formsInputs?.length + 1 && <div>
                        <button className='border px-5 py-1 rounded shadow outline-none' onClick={() => handleAdd()} disabled={state?.formsInputs?.length === 5}>Add City</button>
                    </div>}

                </div>
            </>}
        </main >
    )
}

export default AddPassenger