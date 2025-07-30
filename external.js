// Assignment 7: Smart Coffee Order Assistant

// Login & Access Control
const username = prompt("Enter username (Hadia):");
const password = prompt("Enter password:");

let role = "";
let securityLevel = "";

// Authentication
if (username === "Hadia" && password === "1234") {
  role = "admin";
  securityLevel = "high";
} else {
  alert("Invalid credentials. Access denied.");
  throw new Error("Unauthorized access. Program terminated.");
}

// Coffee Shop Order Calculator
const customerName = prompt("What's your name?");
const age = parseInt(prompt("How old are you?"), 10);
if (isNaN(age) || age <= 0) {
  alert("Invalid age entered.");
  throw new Error("Invalid age input.");
}

const coffeeTypeInput = prompt("Choose coffee type: espresso, latte, or cappuccino");
const coffeeType = coffeeTypeInput ? coffeeTypeInput.toLowerCase() : "";
const validCoffeeTypes = ["espresso", "latte", "cappuccino"];

if (!validCoffeeTypes.includes(coffeeType)) {
  alert("Invalid coffee type.");
  throw new Error("Invalid coffee type selected.");
}

const quantity = parseInt(prompt("How many cups would you like?"), 10);
if (isNaN(quantity) || quantity <= 0) {
  alert("Invalid quantity entered.");
  throw new Error("Invalid quantity input.");
}

// Set price per cup
let pricePerCup = 0;
if (coffeeType === "espresso") {
  pricePerCup = 2.5;
} else if (coffeeType === "latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 4.0;
}

// Calculate totals
const originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.1;
}

const finalTotal = originalTotal - discount;

// Bill & Tip
const splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"), 10);
if (![1, 2, 3].includes(splitCount)) {
  alert("Invalid number of people splitting the bill.");
  throw new Error("Invalid split count.");
}

const tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"), 10);
if (![0, 5, 10, 15].includes(tipPercent)) {
  alert("Invalid tip percentage.");
  throw new Error("Invalid tip percentage.");
}

const tipAmount = finalTotal * (tipPercent / 100);
const totalWithTip = finalTotal + tipAmount;
const amountPerPerson = totalWithTip / splitCount;

// Display results
alert(
  `Hello ${customerName} ☺️\n` +
  `You ordered ${quantity} ${coffeeType}(s).\n` +
  `Original total: $${originalTotal.toFixed(2)}\n` +
  `Discount: $${discount.toFixed(2)}\n` +
  `Tip: $${tipAmount.toFixed(2)}\n` +
  `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
  `Split between ${splitCount} people: $${amountPerPerson.toFixed(2)} each`
);

// Update page content
document.querySelector("h1").innerText = `Thanks for your order, ${customerName}! Good appetit!`;
document.querySelectorAll("h2, .tagline").forEach(el => el.style.display = "none");
