import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {numberWithCommas} from '../utils/format.js'
export const Transaction = ({transaction}) => {
    const { deleteTransaction} =useContext(GlobalContext)
    const sign =transaction.amount<0?'-':'+'
    const clsMinusPlus = transaction.amount<0?'minus' : 'plus'
    return (
        <li className={clsMinusPlus}>
        {transaction.text} <span>{sign}${ numberWithCommas(Math.abs(transaction.amount))}</span>
        <button className="delete-btn" 
        onClick={()=>deleteTransaction(transaction._id)} className="delete-btn">x</button>
      </li>
    )
}
