"use client"

import axios from "axios"
import next from "next"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignIn() {
    const router = useRouter()

    const [state, setState] = useState({
        username: 'mor_2314',
        password: "83r5^_",
    })

    const { username, password } = state

    //api call with promise .then
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch('https://fakestoreapi.com/auth/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: 'mor_2314',
    //             password: "83r5^_"
    //         })
    //     })
    //         .then(res => res.json())
    //         .then((res) => {
    //             let tokenKey = res?.token
    //             let userData = {
    //                 username: username,
    //                 token: tokenKey
    //             }
    //             login(userData);
    //             router.push("/")
    //         })
    // }

    // api call with async await
    // const handleSubmit2 = async () => {
    //     try {
    //         let url = 'https://fakestoreapi.com/auth/login'
    //         let response = await fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 "Content-type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 username: 'mor_2314',
    //                 password: "83r5^_",
    //             })
    //         });
    //         let data = await response.json();
    //         console.log(data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // api call with axios
    const handleSubmit3 = async () => {
        let payload = {
            username: 'mor_2314',
            password: "83r5^_"
        }
        try {
            let url = 'https://fakestoreapi.com/auth/login'

            let res = await axios.post(url, payload)
            router.push("/")
            console.log(res?.data)
        } catch (error) {
            console.log(error)
        }
    }

    const loginInfo = [
        { name: "username", type: "text", placeholder: "User Name", label: "User Name", value: username },
        { name: "password", type: "password", placeholder: "Password", label: "Password", value: password }
    ]
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    {loginInfo?.map((item, i) => {
                        return (
                            <div key={i}>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    {item?.label}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id={item?.name}
                                        name={item?.name}
                                        type={item?.type}
                                        placeholder={item?.placeholder}
                                        defaultValue={item?.value}
                                        // autoComplete="email"
                                        // required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        )
                    })
                    }

                    <div>
                        <button
                            onClick={(e) => handleSubmit3(e)}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}
