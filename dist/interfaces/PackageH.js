"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
class Package {
    constructor(id, senderName, receiverName, senderAddress, receiverAddress, weight, shippingMethod, costPerWeight, status, trackingNumber) {
        this.id = id;
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.senderAddress = senderAddress;
        this.receiverAddress = receiverAddress;
        this.weight = weight;
        this.shippingMethod = shippingMethod;
        this.costPerWeight = costPerWeight;
        this.status = status;
        this.trackingNumber = trackingNumber;
    }
    baseCost() {
        return this.weight * this.costPerWeight;
    }
}
exports.Package = Package;
