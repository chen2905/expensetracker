import React,{useContext,useEffect} from 'react'
import {Transaction} from './Transaction'
import {GlobalContext} from '../context/GlobalState'
export const TransactionList = () => {
  const {transactions,getTransactions} =useContext(GlobalContext)

  useEffect(
    ()=>{
      getTransactions()
    },[]
  )
    return (
        <>
        <h3>History</h3>
        <ul className="list">
        {transactions.map(transaction=>(<Transaction transaction={transaction}/>))}         
        </ul>
        </>
    )
}
/*
JS is standard javascript, JSX is an HTML-like syntax that you can use with React to (theoretically) make it easier and more intuitive to create React components. ... Without JSX, creating large, 
nested HTML documents using JS syntax would be a large pain in the rear; JSX simply makes that process easier.
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.
As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.
JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.
Expressions in JSX
With JSX you can write expressions inside curly braces { }.
The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

E.G 
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

*/