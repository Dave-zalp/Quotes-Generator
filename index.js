const apiUrl = 'https://api.quotable.io/random'
const QuoteArea = document.getElementById('quote');
const authorBox = document.getElementById('author')

async function FetchQuote(){
  const response = await fetch(apiUrl);
  if(response.status == 200){
    var data = await response.json();
    
    QuoteArea.innerText = data.content
    authorBox.innerText = data.author
  }


}

FetchQuote()

function tweet(){
    const TweetUrl = 'https://twitter.com/intent/tweet?text=' + QuoteArea.innerText + " ----by "+ author.innerText;
    window.open(TweetUrl);
}

