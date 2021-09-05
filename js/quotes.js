const quotes = [
  { quote: "Eat Kimchi", author: "-Nico" },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt",
  },
  {
    quote: "I believe clone coding",
    author: "-Nico",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "-Lao Tzu",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "-Friedrich Nietzsche",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "-John Lennon",
  },
  {
    quote: "When the going gets tough, the tough get going.",
    author: "-Joe Kennedy",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "-Mae West",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "-Henry Ford",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
