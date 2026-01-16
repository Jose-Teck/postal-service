import { TwoDayPackage } from "../interfaces/SecondDayPckgeH";

export class TwoDayPackageImpl extends TwoDayPackage {
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
            "Created",
            trackingNumber,
            flatFee
        );
        this.shippingMethod = "Two-Day";
    }

    calculateCost(): number {
        return this.weight * this.costPerWeight + this.flatFee;
    }

    displayDetails(): void {
        console.log("=== Two-Day Package ===");
        console.log(`Sender: ${this.senderName}`);
        console.log(`Receiver: ${this.receiverName}`);
        console.log(`Tracking #: ${this.trackingNumber}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total Cost: $${this.calculateCost()}`);
    }
}
