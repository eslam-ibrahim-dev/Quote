var Quotes = [
    { Code: "― Oscar Wilde", quote: "“Be yourself; everyone else is already taken.”" },
    { Code: "― Albert Einstein", quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" },
    { Code: "― Frank Zappa", quote: "“So many books, so little time.”" },
    { Code: "― Marcus Tullius Cicero", quote: "“A room without books is like a body without a soul.”" },
    { Code: "― Mae West", quote: "“You only live once, but if you do it right, once is enough.”" },
]

var h3 = document.getElementById("demo");
var p = document.getElementById("demo2");


function GetQuote() {

    var random = Math.floor(Math.random() * Quotes.length);
    h3.innerHTML = Quotes[random].Code;
    p.innerHTML = Quotes[random].quote;
}