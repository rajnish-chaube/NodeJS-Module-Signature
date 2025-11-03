// Import the function 
const { mergeTimeRanges } = require('./my-module.js');

console.log(" Running Tests for mergeTimeRanges...");

// Example 1 
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold1 = 200; 
const expected1 = [
  [1000, 2000],
  [2500, 4100],
  [8000, 9500]
];
console.log("\nTest 1:");
console.log("Input:", ranges1, "Threshold:", threshold1);
console.log("Expected:", JSON.stringify(expected1));
console.log("Actual:  ", JSON.stringify(mergeTimeRanges(ranges1, threshold1)));


// Example 2 
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold2 = 4; 
const expected2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
console.log("\nTest 2:");
console.log("Input:", ranges2, "Threshold:", threshold2);
console.log("Expected:", JSON.stringify(expected2));
console.log("Actual:  ", JSON.stringify(mergeTimeRanges(ranges2, threshold2)));

// Example 3
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold3 = 3; 
const expected3 = [
  [0, 35]
];
console.log("\nTest 3:");
console.log("Input:", ranges3, "Threshold:", threshold3);
console.log("Expected:", JSON.stringify(expected3));
console.log("Actual:  ", JSON.stringify(mergeTimeRanges(ranges3, threshold3)));

// Test 4: Unsorted Input (Edge Case)
const ranges4 = [
  [50, 60],
  [10, 20],
  [22, 30]
];
const threshold4 = 2;
const expected4 = [
  [10, 20],
  [22, 30],
  [50, 60]
];
console.log("\nTest 4 (Unsorted):");
console.log("Input:", ranges4, "Threshold:", threshold4);
console.log("Expected:", JSON.stringify(expected4));
console.log("Actual:  ", JSON.stringify(mergeTimeRanges(ranges4, threshold4)));

console.log("\n Tests Completed...");