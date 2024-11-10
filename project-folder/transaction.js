// Task 3
// Create the Transaction Module

// Import necessary functions from asset.js
import { getAssetById } from './asset.js';

class Transaction {
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;

    // Get asset by ID using getAssetById function
    this.asset = getAssetById(assetId);
    if (!this.asset) {
      throw new Error(`Asset with ID ${assetId} not found.`);
    }

    // Ensure type is either "buy" or "sell"
    if (type !== "buy" && type !== "sell") {
      throw new Error("Transaction type must be 'buy' or 'sell'.");
    }
  }

  // Method to process transaction
  process() {
    if (this.type === "buy") {
      // Increase quantity for a buy transaction
      this.asset.quantity += this.quantity;
    } else if (this.type === "sell") {
      // Check if there is enough quantity to sell
      if (this.asset.quantity < this.quantity) {
        throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
      }
      // Decrease quantity for a sell transaction
      this.asset.quantity -= this.quantity;
    }
  }
}

// Export the Transaction class
export { Transaction };

