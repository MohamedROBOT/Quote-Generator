var quotes = [
  {
    quote:'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde'
  },

  {
    quote:'That it will never come again is what makes life so sweet.',
    author: 'Emily Dickinson'
  },

  
  {
    quote:'It is never too late to be what you might have been.',
    author: 'George Eliot'
  },

  {
    quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson'
  },

  {
    quote:'Pain is inevitable. Suffering is optional.',
    author: 'Haruki Murakami'
  },

  {
    quote:'All the worlds a stage, and all the men and women merely players.',
    author: 'William Shakespeare'
  },

  {
    quote:'Be kind, for everyone you meet is fighting a hard battle.',
    author: 'Plato'
  },

  {
    quote:'Unable are the loved to die for love is immortality.',
    author: 'Emily Dickinson'
  },

  {
    quote:'Let me live, love, and say it well in good sentences.',
    author: 'Sylvia Plath'
  },

  {
    quote:"Don't let your happiness depend on something you may lose",
    author: 'C.S. Lewis'
  },

]
var allQuotes = [...quotes]; //copy of an array

function generateQuote() {
  //refresh statements
  if (allQuotes.length === 0) {
    allQuotes = [...quotes];
  }

  //get a random item using 
  var randomQuote = Math.floor(Math.random() * allQuotes.length);

 

  //delete a item and copy it
  var selectedQuote = allQuotes.splice(randomQuote, 1)[0];

 

  document.getElementById('quote').innerHTML = `"${selectedQuote.quote}"`;
  document.getElementById('author').innerHTML = `—${selectedQuote.author}`;

}

