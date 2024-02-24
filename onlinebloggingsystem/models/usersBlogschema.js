import mongoose from "mongoose";

const usersBlogschema = new mongoose.Schema(
    {
         title:{
            type: String,
            required:true,
            
        },

        category:{
            type: String,
            required:true,
            trim:true
        },

        blog:{
            type:String,
            require:true,
            trim:true
        }
    
    
    },
    { timestamps: true }  
);

//Model Define
export default mongoose.model("blogusers", usersBlogschema);