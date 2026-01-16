export abstract class Package {
    protected id: number;
    protected senderName: string;
    protected receiverName: string;
    protected senderAddress: string;
    protected receiverAddress: string;
    protected weight: number;
    protected shippingMethod: "One-Day" | "Two-Day";
    protected costPerWeight: number;
    protected status: string;
    protected trackingNumber: string;

    constructor(
        id: number,
        senderName: string,
        receiverName: string,
        senderAddress: string,
        receiverAddress: string,
        weight: number,
        shippingMethod: "One-Day" | "Two-Day",
        costPerWeight: number,
       status: "Created",
        trackingNumber: string,
    ){
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
    protected baseCost(): number {
        return this.weight * this.costPerWeight;
    }
    abstract calculateCost(): number;
    abstract displayDetails(): void;
}
