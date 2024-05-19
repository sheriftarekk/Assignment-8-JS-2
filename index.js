var quotes =[
    {
        qoute : "Be yourself; everyone else is already taken.",
        author : "Oscar Wilde"
    },
    {
        qoute : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times ard tohandle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        author : "Marilyn Monroe"
    },
    {
        qoute : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author : " Albert Einstein"
    },
    {
        qoute : "So many books, so little time.",
        author : "Frank Zappa"
    },
    {
        qoute : "A room without books is like a body without a soul",
        author : "Marcus Tullius Cicero"
    },
    {
        qoute : "Be who you are and say what you feel, because those who mind don't matter, and those who matter on't mnd.",
        author : " Bernard M. Baruch"
    },
    {
        qoute : "You know you're in love when you can't fall asleep because reality is finally better than your reams.",
        author : "Dr. Seuss"
    },
    {
        qoute : "You only live once, but if you do it right, once is enough",
        author : "Mae West"
    },
    {
        qoute : "Be the change that you wish to see in the world.",
        author : "Mahatma Gandhi"
    },
    {
        qoute : "In three words I can sum up everything I've learned about life: it goes on.",
        author : "Robert Frost"
    },
    {
        qoute : "If you tell the truth, you don't have to remember anything",
        author : "Mark Twain"
    },
    {
        qoute : "I've learned that people will forget what you said, people will forget what you did, but people ill neer forget how you made them feel.",
        "author" : "Maya Angelou"
    },
    {
        qoute : "A friend is someone who knows all about you and still loves you.",
        author : " Elbert Hubbard"
    },
    {
        qoute : "To live is the rarest thing in the world. Most people exist, that is all.",
        author : "Oscar Wilde"
    },
    {
        qoute : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author : "Mahatma Gandhi"
    },
    {
        qoute : "We accept the love we think we deserve.",
        author : "Stephen Chbosky"
    }
]

function display(){

    num = Math.round(Math.random()*quotes.length +1);
    document.getElementById("quote").innerHTML = "``"+quotes[num].qoute+"``";
    document.getElementById("author").innerHTML ="--" +quotes[num].author;
    
}
