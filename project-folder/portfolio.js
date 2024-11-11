// Task 2
// Create the Portfolio Module

// Import the assets array from the asset.js file
import { assets } from './asset.js';

// Function for summing up total portfolio value of all assets
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => {
        // For each asset, it multiplies the price by the quantity and adds it to the total
        return total + (asset.price * asset.quantity);
    }, 0);
}

// Function for finding the portfolio's percentage allocation for each asset 
export function getPortfolioAllocation() {
    const totalAssetsValue = calculatePortfolioValue(); // Gets the total Value
    return assets.map(asset => {
        // Calulates the value of each of the ten assets listed in the portfolio
        const assetValue = asset.price * asset.quantity;
        // Finds percentage by dividing individual asset value by total asset portfolio value
        const allocationPercentage = totalAssetsValue ? (assetValue / totalAssetsValue) * 100 : 0;
        // Shows asset's id, name, & value properties
        // Also shows allocationPercentage property rounded to two points with a percent sign at the end
        return {
            ID: asset.id,
            Name: asset.name,
            Value: assetValue,
            AllocationPercentage: allocationPercentage.toFixed(2) + '%',
        };
    });
}
