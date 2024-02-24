import express from "express";
import { usersInsert,usersGetall, usersDelete } from "../controllers/usersContactcontroller.js";
const router = express.Router();     // Object Router

//Routes Define
router.post("/insertuser", usersInsert);
router.get("/allgetuser", usersGetall);
router.delete("/deleteuser/:id",usersDelete);

export default router;
