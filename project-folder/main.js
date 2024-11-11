// Task 4
// Create the Main Application

// Imports calculatePortfolioValue getPortfolioAllocation, and Transaction classes
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function displays portfolio value / allocation
function displayPortfolio() {
    const totalValue = calculatePortfolioValue();  // Get the total portfolio value
    const allocation = getPortfolioAllocation();  // Get the portfolio allocation

    // Display total portfolio value & allocation
    console.log("Total Portfolio Value: $", totalValue.toFixed(2));
    console.log("Portfolio Allocation:");

    allocation.forEach(asset => {
        console.log(`${asset.Name}: $${asset.Value.toFixed(2)} (${asset.AllocationPercentage.toFixed(2)}%)`);
    });
}

// Example Transactions
const transactions = [
    new Transaction(1, 'buy', 10),  // Buy 10 of "Tech Town" 
    new Transaction(3, 'sell', 5),  // Sell 5 of "Atomic" 
    new Transaction(7, 'buy', 20),  // Buy 20 of "Unity" 
    new Transaction(4, 'sell', 30), // Sell 30 of "Paulus Inc" 
];

// Display initial portfolio
console.log("Initial Portfolio:");
displayPortfolio();

// Process each transaction and display updated portfolio
transactions.forEach((transaction, index) => {
    try {
        console.log(`Processing Transaction #${index + 1}:`);
        console.log(`${transaction.type} ${transaction.quantity} units of Asset ${transaction.assetId}`);
        transaction.process();  // Process the transaction (buy/sell)

        // Display updated portfolio after transaction
        console.log("Updated Portfolio:");
        displayPortfolio();
    } catch (error) {
        console.error("Error processing transaction:", error.message);
    }
});
