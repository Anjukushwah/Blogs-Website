import usersContactschema from "../models/usersContactschema.js";

//Create Users
export const usersInsert = async (req, res) => {
    try {
      const {fullname, email, message} = req.body;

        // Save User
        const contactUsers = await new usersContactschema({
            fullname, 
            email,
            message,
           
        }).save();
         res.status(201).send({
          success: true,
          message: "Your Meseege Have Been Sent Successfully ",
          contactUsers,
        });
      }
    
     catch (error) {
     console.log(error);
      res.status(500).send({
        success: false,
        message: "Your Meseege Has Not Been Sent",
        error,
      });
    }
  };

// Get All Users
export const usersGetall = async (req, res) => {
  try {
    // Find all users in the database
    const allUsersget = await usersContactschema.find();

    // Check if there are no users
    if (!allUsersget || allUsersget.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No Users Found',
      });
    }

    // Send the list of users as a JSON response
    res.status(200).json({
      success: true,
      message: 'All Users Retrieved Successfully',
      users: allUsersget,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'An Error Occurred While Retrieving Users',
      error: error.message,
    });
  }
};


//Delete Users

export const usersDelete = async (req, res) => {
    const { id } = req.params;
 
    try {
      const deleteUserdata = await usersContactschema.findByIdAndDelete({ _id: id });
 
      // Check if the user was found and deleted
      if (!deleteUserdata) {
         return res.status(404).json({
          success: false,
          message: 'User Not Found',
        });
      }
 
      res.status(200).json({
        success: true,
        message: 'User Deleted Successfully',
        deletedUser: deleteUserdata,
      });
 
 
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: 'An Error Occurred While Deleting The User',
        error: error.message, // Include the error message for debugging
      });
    }
  };
 
