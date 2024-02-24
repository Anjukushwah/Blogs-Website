import mongoose  from 'mongoose';
// 7KyQw55q1hsM9fnB
const ConnectDB = async () => {
  try {
   const conn = await mongoose.connect('mongodb+srv://anjukushwah522:7KyQw55q1hsM9fnB@cluster0.gvg7dkt.mongodb.net/?retryWrites=true&w=majority',{
     useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   console.log(`Connected to MongoDB Database!`);


 } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

  export default ConnectDB;

  