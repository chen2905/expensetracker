const Transaction =require('../models/Transaction')

//@desc   get all the transactions
//@route  get /api/vi/transations
//@acess public
exports.getTransactions =async (req,res,next)=>{
    //res.send('Get transactions from transaction controller')
    try{
        const transactions =await Transaction.find();
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        }
     )

    }catch(err){

        return res.send(500).json({
            success:false,
            error:'Server Error'
        })
    }
}

//@desc   add a transaction
//@route  get /api/vi/transations
//@acess public
exports.addTransaction =async (req,res,next)=>{
    //res.send('POST transaction')
    try{
        const {text,amount} =req.body
        const transaction =await Transaction.create(req.body)
        return res.status(201).json({
            success:true,
            data:transaction
        })
    }catch(err){
        console.log(err)
    }
 
}

//@desc   delete a transaction
//@route  get /api/vi/transations/:id
//@acess public
exports.deleteTransaction =async (req,res,next)=>{
    res.send('Delete transaction')
}