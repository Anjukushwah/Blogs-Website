import mongoose from "mongoose";

//Create/Register Users Schema Define

const usersRegisterschema = new mongoose.Schema(
    {
    firstname:{
        type: String,
        required:true,
        trim:true
    },

    lastname:{
        type: String,
        required:true,
        trim:true
    },
      gender: {
        type: String,
        required: true,
        // validate: {
        //   validator: function (value) {
        //     // Validate that the gender is one of these values (case-insensitive)
        //     return ["male", "female", "other"].includes(value.toLowerCase());
        //   },
        //   message: "Invalid gender value",
        // },
        // trim: true,
      },

     mobile: { 
        type: String,
        // required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
    password:{
        type: String,
        required:true,
        trim:true
    },

    // confirmpassword:{
    //     type: String,
    //     required:true,
    //     trim:true
    // },

},
{ timestamps: true }     //Use Time Date Update Status
);

//Model Define
export default mongoose.model("registerusers", usersRegisterschema);



