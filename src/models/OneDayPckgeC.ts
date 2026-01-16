import { OneDayPackage } from "../interfaces/OneDayPckgeH";

export class OneDayPackageImpl extends OneDayPackage {
    constructor(
        id: number,
        senderName: string,
        receiverName: string,
        senderAddress: string,
        receiverAddress: string,
        weight: number,
        costPerWeight: number,
        status: string,
        trackingNumber: string,
        flatFee: number
    ) {
        super(
            id,
            senderName,
            receiverName,
            senderAddress,
            receiverAddress,
            weight,
            costPerWeight,
           "created",
            trackingNumber,
            flatFee
        );
        this.shippingMethod = "One-Day";
    }

    calculateCost(): number {
        return this.weight * this.costPerWeight + this.flatFee;
    }

    displayDetails(): void {
        console.log("=== One-Day Package ===");
        console.log(`Sender: ${this.senderName}`);
        console.log(`Receiver: ${this.receiverName}`);
        console.log(`Tracking #: ${this.trackingNumber}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total Cost: $${this.calculateCost()}`);
    }
}
