"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoDayPackageImpl = void 0;
const SecondDayPckgeH_1 = require("../interfaces/SecondDayPckgeH");
class TwoDayPackageImpl extends SecondDayPckgeH_1.TwoDayPackage {
    constructor(id, senderName, receiverName, senderAddress, receiverAddress, weight, costPerWeight, status, trackingNumber, flatFee) {
        super(id, senderName, receiverName, senderAddress, receiverAddress, weight, costPerWeight, "Created", trackingNumber, flatFee);
        this.shippingMethod = "Two-Day";
    }
    calculateCost() {
        return this.weight * this.costPerWeight + this.flatFee;
    }
    displayDetails() {
        console.log("=== Two-Day Package ===");
        console.log(`Sender: ${this.senderName}`);
        console.log(`Receiver: ${this.receiverName}`);
        console.log(`Tracking #: ${this.trackingNumber}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total Cost: $${this.calculateCost()}`);
    }
}
exports.TwoDayPackageImpl = TwoDayPackageImpl;
