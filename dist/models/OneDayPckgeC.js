"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneDayPackageImpl = void 0;
const OneDayPckgeH_1 = require("../interfaces/OneDayPckgeH");
class OneDayPackageImpl extends OneDayPckgeH_1.OneDayPackage {
    constructor(id, senderName, receiverName, senderAddress, receiverAddress, weight, costPerWeight, status, trackingNumber, flatFee) {
        super(id, senderName, receiverName, senderAddress, receiverAddress, weight, costPerWeight, "created", trackingNumber, flatFee);
        this.shippingMethod = "One-Day";
    }
    calculateCost() {
        return this.weight * this.costPerWeight + this.flatFee;
    }
    displayDetails() {
        console.log("=== One-Day Package ===");
        console.log(`Sender: ${this.senderName}`);
        console.log(`Receiver: ${this.receiverName}`);
        console.log(`Tracking #: ${this.trackingNumber}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total Cost: $${this.calculateCost()}`);
    }
}
exports.OneDayPackageImpl = OneDayPackageImpl;
