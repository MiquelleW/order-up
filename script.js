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
