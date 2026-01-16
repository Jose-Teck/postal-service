"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageImpl = void 0;
const PackageH_1 = require("../interfaces/PackageH");
class PackageImpl extends PackageH_1.Package {
    constructor(id, senderName, receiverName, senderAddress, receiverAddress, weight, shippingMethod, costPerWeight, status, trackingNumber) {
        super(id, senderName, receiverName, senderAddress, receiverAddress, weight, shippingMethod, costPerWeight, "Created", trackingNumber);
    }
    baseCost() {
        return this.weight * this.costPerWeight;
    }
}
exports.PackageImpl = PackageImpl;
