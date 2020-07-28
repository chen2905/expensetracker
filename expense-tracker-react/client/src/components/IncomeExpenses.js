import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {numberWithCommas} from '../utils/format.js'
export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const IncomeTotal = transactions.filter(transaction=>{return transaction.amount>0})
                                .map(transaction=>transaction.amount)
                                .reduce((total,amount)=>{
                                  return total+=amount
                              },0).toFixed(2)
    const ExpenseTotal = transactions.filter(transaction=>{return transaction.amount<0})
                                .map(transaction=>transaction.amount)
                                .reduce((total,amount)=>{
                                  return total+=amount
                              },0).toFixed(2)
  
                              
 //console.log("incomesTotal"+IncomeTotal)
  return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p id="money-plus" className="money plus">+${numberWithCommas(IncomeTotal)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p id="money-minus" className="money minus">-${numberWithCommas(ExpenseTotal)}</p>
        </div>
      </div>
    )
}
