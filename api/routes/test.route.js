import express from "express";
import { asAdmin, asUser } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/as-user", verifyToken, asUser);

router.get("/as-admin", asAdmin);

export default router;
