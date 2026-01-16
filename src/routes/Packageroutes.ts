import express, { Request, Response } from "express";
import { addOneDayPackage, addTwoDayPackage, getAllPackages, updatePackageStatus } from "../controllers/packageController";

const router = express.Router();

router.post("/oneday", addOneDayPackage);
router.post("/twoday", addTwoDayPackage);
router.get("/packages", getAllPackages);
router.put("/packages/:trackingNumber/status", updatePackageStatus);

export default router;