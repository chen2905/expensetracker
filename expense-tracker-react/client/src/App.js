
/* 
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, 
but work in isolation and returns HTML via a render function.
Components come in two types, Class components and Function components, in this tutorial we will concentrate
on Class components.

When creating a React component, the component's name must start with an upper case letter.

The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, 

and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

Lifecycle of Components

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

Mounting
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

constructor()

getDerivedStateFromProps()

render()

componentDidMount()

The render() method is required and will always be called, the others are optional and will be called if you define them.

*/
import React from 'react'
/*
React creates a VIRTUAL DOM in memory.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, 
where it does all the necessary manipulating, before making the changes in the browser DOM.
React only changes what needs to be changed!
React finds out what changes have been made, and changes only what needs to be changed.
*/
import {Header}  from './components/Header'
import {Balance}  from './components/Balance'
import {IncomeExpenses}  from './components/IncomeExpenses'
import {TransactionList}  from './components/TransactionList'
import {AddTransaction}  from './components/AddTransaction'
/* 
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions,
 but work in isolation and returns HTML via a render function.
Components come in two types, Class components and Function components, in this project we will concentrate on function components.
*/


import {GlobalProvider} from './context/GlobalState'
import './App.css'
function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className ="container">
       <Balance/>
       <IncomeExpenses/>
       <TransactionList/>
       <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
