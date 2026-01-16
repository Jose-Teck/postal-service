"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneDayPackage = void 0;
const PackageH_1 = require("./PackageH");
class OneDayPackage extends PackageH_1.Package {
    constructor(id, senderName, receiverName, senderAddress, receiverAddress, weight, costPerWeight, status, trackingNumber, flatFee) {
        super(id, senderName, receiverName, senderAddress, receiverAddress, weight, "One-Day", costPerWeight, "Created", trackingNumber);
        this.flatFee = flatFee;
    }
}
exports.OneDayPackage = OneDayPackage;
