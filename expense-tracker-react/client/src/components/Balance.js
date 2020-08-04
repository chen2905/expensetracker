

import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format.js'
export const Balance = () => {
    const { transactions } = useContext(GlobalContext)


    const amounts = transactions.map(transaction => transaction.amount)
    const balance = amounts.reduce((total, amount) => {
        return total += amount
    }, 0).toFixed(2)
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${numberWithCommas(balance)}</h1>
        </>
    )
}
