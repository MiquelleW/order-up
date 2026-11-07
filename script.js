console.log("Hello from script.js!");

const tags = ["viral", "cheesy", "loaded"];
const prices = [11.99, 8.99, 7.99, 10.99];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " . ";
}

let total = 0;
for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

document.querySelector("#total").textContent = "$" + total;

// Bonus 2
const tax = total * 0.08;
const totalWithTax = total + tax;
document.querySelector("#tax").textContent = "Tax: $" + tax.toFixed(2);
document.querySelector("#total-with-tax").textContent =
  "Total with Tax: $" + totalWithTax.toFixed(2);

// Bonus 3
let cheapCount = 0;
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < 5) {
    cheapCount = cheapCount + 1;
  }
}

document.querySelector("#cheap").textContent =
  cheapCount + " items are under $5";

// Bonus 4
const placeOrderButton = document.querySelector("#place-order");

placeOrderButton.addEventListener("click", function () {
  console.log("Place Order button clicked!");
  // Get the quantities of each item from the input fields
  let pizzaQty = Number(document.querySelector("#pizza-qty").value);
  console.log("Pizza quantity:", pizzaQty);
  let phillyQty = Number(document.querySelector("#philly-qty").value);
  console.log("Philly quantity:", phillyQty);
  let potatoQty = Number(document.querySelector("#potato-qty").value);
  console.log("Potato quantity:", potatoQty);
  let friesQty = Number(document.querySelector("#fries-qty").value);
  console.log("Fries quantity:", friesQty);

  // Calculate the subtotal
  let subtotal =
    pizzaQty * 11.99 + phillyQty * 8.99 + potatoQty * 7.99 + friesQty * 10.99;

  console.log("Subtotal:", subtotal.toFixed(2));

  // Calculate 8% tax
  let orderTax = subtotal * 0.08;
  let finalTotal = subtotal + orderTax;

  console.log("Tax:", orderTax.toFixed(2));
  console.log("Final Total:", finalTotal.toFixed(2));

  // Build the order summary
  let summary = "";

  if (pizzaQty > 0) {
    summary +=
      "Pizza Dip & Garlic Knots x " +
      pizzaQty +
      " - $" +
      (pizzaQty * 11.99).toFixed(2) +
      "\n";
  }

  if (phillyQty > 0) {
    summary +=
      "Philly Cheesesteak Eggrolls x " +
      phillyQty +
      " - $" +
      (phillyQty * 8.99).toFixed(2) +
      "\n";
  }

  if (potatoQty > 0) {
    summary +=
      "Loaded Potato Cheese Balls x " +
      potatoQty +
      " - $" +
      (potatoQty * 7.99).toFixed(2) +
      "\n";
  }

  if (friesQty > 0) {
    summary +=
      "Cheeseburger Loaded Fries x " +
      friesQty +
      " - $" +
      (friesQty * 10.99).toFixed(2) +
      "\n";
  }

  // Show the final results
  if (summary === "") {
    summary = "Please select at least one menu item.";
  } else {
    summary += "\nSubtotal: $" + subtotal.toFixed(2);
    summary += "\nTax (8%): $" + orderTax.toFixed(2);
    summary += "\nTotal: $" + finalTotal.toFixed(2);
  }

  document.querySelector("#order-summary").textContent = summary;
});
