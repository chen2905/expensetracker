/*
React components has a built-in state object.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

The state object can contain as many properties as you like:

Using the state Object

Refer to the state object anywhere in the component by using the this.state.propertyname syntax:

Always use the setState() method to change the state object, it will ensure that the component knows 

its been updated and calls the render() method (and all the other lifecycle methods).
*/

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
import axios from 'axios'
//Initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true
}
//create context

export const GlobalContext = createContext(initialState)

//provide component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions')
            dispatch({
                type: "GET_TRANSACTION",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }
    async function deleteTransaction(id) {

        try {
            const res = await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }


    }

    async function addTransaction(transaction) {


        try {
            const res = await axios.post('/api/v1/transactions/', transaction)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }


    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}