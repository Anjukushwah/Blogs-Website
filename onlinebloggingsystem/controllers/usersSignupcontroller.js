import usersSignupschema from "../models/usersSignupschema.js";

//Create Users
export const usersPost = async (req, res) => {
    try {
      const {firstname, lastname, gender, mobile, email, password, confirmpassword} = req.body;
  
       // Check if email or mobile number already exists
       const existingUserByEmail = await usersSignupschema.findOne({ email });
       const existingUserByMobile = await usersSignupschema.findOne({ mobile });


       if (existingUserByMobile) {
        return res.status(409).send({
            success: false,
            message: "Mobile number is already registered.",
            
        });
    }


       if (existingUserByEmail) {
           return res.status(409).send({
               success: false,
               message: "Email address is already registered.",
             
           });
       }

        // Save User
        const registerUsers = await new usersSignupschema({
            firstname, 
            lastname,
            gender,
            mobile,
            email,
            password,
            confirmpassword,
           
        }).save();

  
        res.status(200).send({
          success: true,
          message: "Registration Successful",
          registerUsers,
        });
      }
    
      catch (error) {
        if (error.name === 'MongoError' && error.code === 11000) {
          // Duplicate key error (code 11000) for the email field
          res.status(409).send({
            success: false,
            message: "Email address is already registered.",
          });
        } else {
          // Other Mongoose validation errors
          res.status(400).send({
            success: false,
            message: "Invalid data.",
            error: error.message,
          });
        }
      }
    }
      
      
  //Login Users

  export const usersLogin = async (req, res) => {

    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const loginUser = await usersSignupschema.findOne({ email });
  
      if (!loginUser) {
        return res.status(404).json({
          success: false,
          message: "User Not Found",
        });
      }
      // Check if the password is correct
      if (loginUser.password !== password) {
        return res.status(401).json({ message: "Incorrect Password" });
      }
  
      return res.status(200).json({ message: "Login Successful" });
    } catch (error) {
      res.status(500).json(error);
      console.log("Catch Block Error");
    }
  };

  
  