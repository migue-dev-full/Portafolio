const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn-api");

const url = "https://quotes-api-self.vercel.app/quote";


let getQuote = () => {
    fetch(url)
    .then((response) => response.json())
    .then((item) => {     
       quote.innerText = item.quote;
       author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);