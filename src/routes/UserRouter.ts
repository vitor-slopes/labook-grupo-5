import express from "express";
import { UserController } from "../controller/UserController";
import { FriendshipController } from "../controller/FollowController"

export const userRouter = express.Router();

userRouter.post("/signup", new UserController().signup);


// Follow routes
userRouter.post("/friendship", new FriendshipController().addFriend)
userRouter.post("/undofrienship", new FriendshipController().deleteFriend)
