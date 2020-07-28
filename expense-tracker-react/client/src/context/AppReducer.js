export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            console.log("deleting"+action.payload)
            return {
                ...state,
                transactions:state.transactions
                .filter(transaction=> transaction._id!==action.payload)
            } 
        case 'ADD_TRANSACTION':
            console.log("Adding"+action.payload)
            return {
                ...state,
                transactions: [...state.transactions,action.payload]
                //[action.payload,
               //transactions:...state.transactions.push(action.payload)
                
            } 
            case 'GET_TRANSACTION':
                console.log("GET"+action.payload)
                return {
                    ...state,
                    loading:false,
                    transactions: action.payload
                } 
                case 'TRANSACTION_ERROR':
                    console.log("GET"+action.payload)
                    return {
                        ...state,
                        error: action.payload
                    } 
        default:
        return state
    }
}