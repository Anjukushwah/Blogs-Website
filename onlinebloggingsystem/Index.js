import express from 'express';
const app = express();
import connectDB from "./DB.js"; // Import the connectDB function using ES6 import
import cors from "cors";
import usersSignuproute from "./routes/usersSignuproute.js";
import usersContactroute from "./routes/usersContactroute.js";
import usersBlogroute from './routes/usersBlogroute.js';


app.use(cors());
app.use(express.json());
app.use(usersSignuproute);
app.use(usersContactroute);
app.use(usersBlogroute);


app.get("/", (req, res) => {
    res.send("Hello, Your URL Is Working..")
 });


 app.listen(5000, () => {
   console.log("Server is Running..");
 })

 connectDB();
