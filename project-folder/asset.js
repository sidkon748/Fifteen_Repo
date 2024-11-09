// Task 1
// Create the Asset Module

// const Array of assets with properties of id, name, type, price, and quantity
// String properties: name, and type
// Number properties: id, price, and quantity
export const assets = [
    { id: 1, name: "Tech Town", type: "stock", price: 150.00, quantity: 16 },
    { id: 2, name: "Heron Line", type: "bond", price: 550.00, quantity: 38 },
    { id: 3, name: "Atomic", type: "stock", price: 500.00, quantity: 41 },
    { id: 4, name: "Paulus Inc", type: "stock", price: 600.00, quantity: 74 },
    { id: 5, name: "Joseph Marine's", type: "bond", price: 1020.00, quantity: 47 },
    { id: 6, name: "Paulus Corp", type: "stock", price: 440.00, quantity: 33 },
    { id: 7, name: "Unity", type: "bond", price: 980.00, quantity: 75 },
    { id: 8, name: "Trident Holdings", type: "bond", price: 1020.00, quantity: 101 },
    { id: 9, name: "Burger General", type: "stock", price: 550.00, quantity: 9 },
    { id: 10, name: "LawnLand", type: "stock", price: 1040.00, quantity: 25 }
  ];
  
// Export function for assets array by ID property to other files
export function getAssetById(id) {
    return assetList.find(asset => asset.id === id);
}