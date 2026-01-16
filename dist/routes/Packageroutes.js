"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const packageController_1 = require("../controllers/packageController");
const router = express_1.default.Router();
router.post("/oneday", packageController_1.addOneDayPackage);
router.post("/twoday", packageController_1.addTwoDayPackage);
router.get("/packages", packageController_1.getAllPackages);
router.put("/packages/:trackingNumber/status", packageController_1.updatePackageStatus);
exports.default = router;
