import React from 'react'
import MainLayout from './(primary)/layout'
import { Provider } from "react-redux"
import store from '../store/store'

export default function Template({ children }) {
    return (
        <Provider store={store}>
            <div>
                {/* <MainLayout /> */}
                {children}
            </div>
        </Provider>
    )
}
