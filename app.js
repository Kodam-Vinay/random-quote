AOS.init();

const tweetMe = document.getElementById("tweetMe")
const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
const newQuote = document.getElementById("newQuote")

const getQuotes = async () => {
    let jsonData = "";
    let quote= "";

    const tweetHere = () => {
        //now we need to pass the quote as a query parameter so that the data will display on twiiter post window ?text=""
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}` //this is used to make a tweet
        window.open(twitterUrl) //it redirect/open this url in a newWindow
    }

    const getRandomQuote = () => {
        const randomNum = Math.floor(Math.random() * jsonData.length)
        const randomQuoteData = jsonData[randomNum]
        quote = randomQuoteData.text
        const authorName = randomQuoteData.author
        quotes.innerText = quote
        author.innerText = authorName === null ? 'unKnown': `By ${authorName}`
    }

    try{
        const apiUrl = "https://type.fit/api/quotes"
        const data = await fetch(apiUrl)
        jsonData = await data.json()
        getRandomQuote()
    }catch(err){
        console.log(err)
    }

    tweetMe.addEventListener("click", tweetHere)
    newQuote.addEventListener("click", getRandomQuote)
}

getQuotes()