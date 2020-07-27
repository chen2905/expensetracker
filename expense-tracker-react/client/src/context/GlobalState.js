 import React, {createContext,useReducer} from 'react';
 import AppReducer from './AppReducer.js';
 import axios from 'axios'
 //Initial state
 const initialState ={
     transactions: [],
     error:null,
     loading:true
 }
 //create context

 export const GlobalContext = createContext(initialState)

 //provide component

 export const GlobalProvider = ({children})=>{

    const[state,dispatch] =useReducer(AppReducer,initialState)

    //actions
    async function getTransactions(){
        try{
            const res = await axios.get ('/api/v1/transactions')
            dispatch({
                type:"GET_TRANSACTION",
                payload:res.data.data
            })
        }catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.data.error
            })
        }
    }
    function deleteTransaction(id){
        dispatch ({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return (<GlobalContext.Provider value ={{
        transactions:state.transactions,
        error:state.error,
        loading:state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
 }