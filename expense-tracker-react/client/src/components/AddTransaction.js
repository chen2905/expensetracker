/*
React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onClick="shoot()".

Just like in HTML, React uses forms to allow users to interact with the web page.

Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the onChange attribute:

Note that we use event.preventDefault() to prevent the form from actually being submitted.
*/
import React ,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const AddTransaction = () => {
    const [text,setText]= useState('')
    const [amount,setAmount] =useState(0)
    const { addTransaction} =useContext(GlobalContext)

    const onSubmit =(e)=>{
      e.preventDefault()
      const newTransaction = { id:  Math.floor((Math.random() * 1000000) + 1),
         text: text, amount: +amount }
      console.log(newTransaction)

         addTransaction(newTransaction)
    }
    return (
        <>
             <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=> setText(e.target.value)} 
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  placeholder="Enter amount..." value={amount} 
          onChange={(e)=> setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
  