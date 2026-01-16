"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoDayPackage = void 0;
const PackageH_1 = require("./PackageH");
class TwoDayPackage extends PackageH_1.Package {
    constructor(id, senderName, receiverName, senderAddress, receiverAddress, weight, costPerWeight, status, trackingNumber, flatFee) {
        super(id, senderName, receiverName, senderAddress, receiverAddress, weight, "Two-Day", costPerWeight, "Created", trackingNumber);
        this.flatFee = flatFee;
    }
}
exports.TwoDayPackage = TwoDayPackage;
