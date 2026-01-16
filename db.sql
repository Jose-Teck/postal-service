CREATE TABLE packages (
    id SERIAL PRIMARY KEY,
    senderName VARCHAR(255) NOT NULL,
    receiverName VARCHAR(255) NOT NULL,
    senderAddress TEXT NOT NULL,
    receiverAddress TEXT NOT NULL,
    weight FLOAT NOT NULL,
    costPerWeight FLOAT NOT NULL,
    trackingNumber INT UNIQUE NOT NULL,
    flatFee FLOAT DEFAULT NULL,
    shippingMethod VARCHAR(20) NOT NULL CHECK (shippingMethod IN ('One-Day', 'Two-Day')), -- Fixed CHECK constraint
    status VARCHAR(20) NOT NULL CHECK (status IN ('Created', 'Pending', 'In-Transit', 'Delivered')), -- Fixed CHECK constraint
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);