const Transaction =require('../models/Transaction')
/* consider all those js files have export., models, controllers, routers are some kind modules, 
they are the collections of functions can be used but require(..)
*/
//@desc   get all the transactions
//@route  get /api/vi/transations
//@acess  public
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

        if(err.name==='ValidationError'){//client side error
            const  messages = Object.values(err.errors).map(val=>val.message)
            return res.status(400).json(
                {
                    success:false,
                    error:messages
                }
            )
        }else{
            return res.send(500).json({
                success:false,
                error:'Server Error'
            })
        }


       
    }
 
}

//@desc   delete a transaction
//@route  get /api/vi/transations/:id
//@acess public
exports.deleteTransaction =async (req,res,next)=>{
    try{
        const transaction = await Transaction.findById(req.params.id)
        if (!transaction){
            return res.status(404).json({
             success:false,
             error:'No transaction found'
            }
            )
        }
        await transaction.remove();
        return res.status(200).json({
            success:true,
            data:{}
        })

    } catch(err) {
        return res.send(500).json({
            success:false,
            error:'Server Error'
        })
    }
}