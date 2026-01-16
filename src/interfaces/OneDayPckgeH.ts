import { Package } from "./PackageH";

export abstract class OneDayPackage extends Package {
    protected flatFee: number;

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
    ){
        super(
            id,
            senderName,
            receiverName,
            senderAddress,
            receiverAddress,
            weight,
            "One-Day",
            costPerWeight,
            "Created",
            trackingNumber
        );
        this.flatFee = flatFee;
    }

    abstract calculateCost(): number;
    abstract displayDetails(): void;
}
