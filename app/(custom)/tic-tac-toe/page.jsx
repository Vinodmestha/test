"use client";

import react, { useState } from "react"

const Square = ({ v, onClick }) => {
    return <button className="h-16 bg-gray-200 text-black font-semibold border border-red-400" onClick={onClick}>
        {v}
    </button>
}
export default function TicTacToe() {
    const [state, setState] = useState({
        squares: Array(9).fill(null),
        next: true,
        currentMove: 0
    })
    const { squares, next } = state
    const currentSquares = squares[squares.length - 1];
    console.log(currentSquares)
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 5, 6], [7, 8, 9], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }
    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return
        }
        const nextSquares = squares
        if (next) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "0"
        }
        setState((prev) => {
            return {
                ...prev,
                squares: nextSquares,
                next: !next
            }
        })
    }
    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = `winner is ${winner}`
    } else {
        status = `next player ${next ? "X" : "0"} `
    }
    return (
        <div>
            <button onClick={() => setState((prev) => {
                return {
                    ...prev,
                    squares: [...squares.slice(0, 0 + 1), 0]
                }
            })}>Reset</button>
            <p className="pb-5">{status}</p>
            <div className="grid grid-cols-3 w-60">
                {squares?.map((d, i) => {
                    return <Square v={squares[i]} key={i} onClick={() => handleClick(i)} />
                })}
            </div>

        </div>
    )
}