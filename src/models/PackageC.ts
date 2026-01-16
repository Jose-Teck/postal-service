import { Package } from "../interfaces/PackageH";

export abstract class PackageImpl extends Package {
    constructor(
        id: number,
        senderName: string,
        receiverName: string,
        senderAddress: string,
        receiverAddress: string,
        weight: number,
        shippingMethod: "One-Day" | "Two-Day",
        costPerWeight: number,
        status: string,
        trackingNumber: string
    ) {
        super(
            id,
            senderName,
            receiverName,
            senderAddress,
            receiverAddress,
            weight,
            shippingMethod,
            costPerWeight,
            "Created",
            trackingNumber
        );
    }

    protected baseCost(): number {
        return this.weight * this.costPerWeight;
    }
}
