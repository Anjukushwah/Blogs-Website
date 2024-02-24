import express from "express";
import { usersBloginsert, UserBlogsingleget, usersBloggetall, usersBlogupdate,  usersBlogdelete,} from "../controllers/usersBlogcontroller.js";
const router = express.Router();     // Object Router

//Routes Define
router.post("/bloginsert", usersBloginsert);
router.get("/blogsingleget/:id",UserBlogsingleget);
router.get("/blogallget", usersBloggetall);
router.put("/blogupdate/:id",usersBlogupdate);
router.delete('/blogdelete/:id', usersBlogdelete);



export default router;


// aWloYhL2DMwESjZl