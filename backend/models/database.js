const moongoose=require("mongoose");

const transactionSchmea=new moongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description: String,
  price: {
    type: Number,
    required: true,
  },
  dateOfSale: {
    type: Date,
    required: true,
  },

});

module.exports=moongoose.model("Transaction",transactionSchmea);