import usersBlogschema from "../models/usersBlogschema.js";

//Create Users
export const usersBloginsert = async (req, res) => {
    try {
      const {title ,category, blog } = req.body;

        // Save User
        const blogUsers = await new usersBlogschema({ 
            title,
            category,
            blog,
           
        }).save();
         res.status(201).send({
          success: true,
          message: "Your Blog Have Been Sent Successfully ",
          blogUsers,
        });
      }
    
     catch (error) {
     console.log(error);
      res.status(500).send({
        success: false,
        message: "Your Blog Has Not Been Sent",
        error,
      });
    }
  };


  //Single Get Users

  export const UserBlogsingleget = async (req, res) => {
    
    const id = req.params.id;

    try {
      // Assuming you pass the user's ID as a parameter in the URL
  
  
      const usersingleBlog = await usersBlogschema.findById(id);

  
      if (!usersingleBlog) {
        return res.status(404).json({
          success: false,
          message: "User's Blog not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "User's Blog retrieved successfully",
        usersingleBlog,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching the user's blog",
        error,
      });
    }
  };
  


// GetAll users

 export const  usersBloggetall = async (req, res) => {
   try {
    
     const allUsersblogget = await usersBlogschema.find();

     res.status(200).send({
       success: true,
       message: "All Blogs Retrieved Successfully",
       data: allUsersblogget,
     });


   } catch (error) {
     console.error(error);
     res.status(500).send({
       success: false,
       message: "An Error Occurred While Retrieving Users",
       error,
     });
   }
 };


//Update Users
export const usersBlogupdate = async (req, res) => {
  
  const { id } = req.params; // Extract the user ID from the URL

  try {
   
    const { fullname, title, category, blog } = req.body;

    // Find the user by ID and update their information
    const updatedUser = await usersBlogschema.findByIdAndUpdate(
      id,
      {
        fullname,
        title,
        category,
        blog,
      },
      { new: true } // Return the updated user data
    );

    if (!updatedUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "User's Blog has been updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed to update user's blog",
      error,
    });
  }
};


  
//Delete Users
export const usersBlogdelete = async (req, res) => {
  const { id } = req.params;
  try {
    // Check if the user exists
    const blogUserdata = await usersBlogschema.findByIdAndDelete(id);

    if (!blogUserdata) {
        return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "User Deleted Successfully",
      deletedUser: blogUserdata,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An Error Occurred While Deleting The User",
      error,
    });
  }
};


 