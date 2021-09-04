const quotes = [
  { quote: "i like apple", author: "newton" },
  { quote: "i like banana", author: "monkey" },
  { quote: "i like fresh meat", author: "lion" },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
