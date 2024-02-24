import express from "express";
import {usersPost, usersLogin} from "../controllers/usersSignupcontroller.js";
const router = express.Router();     // Object Router



//Routes Define
router.post("/register", usersPost);
router.post("/login", usersLogin);



export default router;