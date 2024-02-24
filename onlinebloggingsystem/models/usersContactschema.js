import mongoose from "mongoose";

const usersContactschema = new mongoose.Schema(
    {
        fullname:{
            type: String,
            required:true,
            trim:true
        },
    
        email:{
            type: String,
            required:true
            
        },
    
        message:{
            type: String,
            required:true,
            trim:true
        },
    
    },
    { timestamps: true }  
);

//Model Define
export default mongoose.model("contactusers", usersContactschema);