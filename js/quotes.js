const Quote = [
  { 
    quote: "Remember that there are no shortcuts.",
    author: "J. Paul Getty, 1892~1976"
  },
  { 
    quote: "Forget perfection.",
    author: "Eike Fuhrken Batista da Silva, 1956~"
  },
  { 
    quote: "Enjoy it.",
    author: "Warren Edward Buffett, 1930~"
  },
  { 
    quote: "Really be an entrepreneur.",
    author: "John D. Rockefeller. Jr, 1874~1937"
  },
  { 
    quote: "Stop stopping yourself.",
    author: "Mark Elliot Zuckerberg, 1984~"
  },
  { 
    quote: "Convictions are more dangerous fores of truth than lies.",
    author: "Friedrich Wilhelm Nietzsche, 1844~1900"
  },
  { 
    quote: "It is not that we have a short life to live, but that we waste a lot of it.",
    author: "Seneque, BC 4~65"
  },
  { 
    quote: "If it is not right, do not do it, if it is not true, do not say it.",
    author: "Marcus Aurelius, 121~180"
  },
  { 
    quote: "True Knowledge Exists in knowing that you know nothing.",
    author: "Socrates, BC 469~399"
  },
  { 
    quote: "The secret of happiness is renunciation.",
    author: "Andrew Canegie, 1835~1919"
  },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

function showQuotes(){
  const todaysQuote = Quote[Math.floor(Math.random() * Quote.length)]

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

showQuotes();
setInterval(showQuotes, 5000);