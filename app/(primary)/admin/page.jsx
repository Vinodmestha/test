import React from 'react'

function page() {
    return (
        <div>
            <button>Add Inc</button>
            {"count"}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default page