export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log("deleting"+action.payload)
            return {
                ...state,
                transactions:state.transactions
                .filter(transaction=> transaction.id!==action.payload)
            } 
        case 'ADD_TRANSACTION':
            console.log("Adding"+action.payload)
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
                //[action.payload,
               //transactions:...state.transactions.push(action.payload)
                
            } 
        default:
        return state
    }
}