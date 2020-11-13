const readline = require('readline-sync');

const jokeRandomizer = {
    // Both arrays contain parts of some knock jokes (the parts that change)
    // For every who's there answer there is a corresponding puncline on the
    // same index in the _punchline array. 
    _whosThereAnswer: ['Yah','Kenya','Dishes!'],
    _punchLine: ['Naaah, bro, I prefer google.','Kenya feel the love tonight?', 'Dishes the Police come out with your hands up'],

    // returns the answer array
    get whosThereAnswer(){
        return this._whosThereAnswer;    
    },
    //returns the punchline array
    get punchLine(){
        return this._punchLine;
    },
    // Returns the string that replies to the who's there answer.
    answerWho(answer){
        return `${answer} who?`;
    },
    // Generates a random combination of who's there answer and punchline
    // to make a nonsensical joke.
    generateRandomJoke(){
        let answer = this.whosThereAnswer[Math.floor(Math.random()*this._whosThereAnswer.length)];
        let punchLineChoice = Math.floor(Math.random()*this._punchLine.length);
        console.log('Knock Knock!');
        console.log('Who\'s there?');
        console.log(answer);
        console.log(this.answerWho(answer));
        console.log('...')
        console.log(this.punchLine[punchLineChoice]);
    },
    // Generates an actual knock knock joke by using the same access index for 
    // the answer and the punchline.
    generateActualJoke(){
        let index = Math.floor(Math.random()*this._whosThereAnswer.length);
        let answer = this.whosThereAnswer[index];
        let punchline = this.punchLine[index];
        console.log('Knock Knock!');
        console.log('Who\'s there?');
        console.log(answer);
        console.log(this.answerWho(answer));
        console.log('...')
        console.log(punchline);
    }
}

// Asks the user for their input and generates the corresponding joke type.
let answer = readline.question('JOKE MENU:\n1. Nonsensical joke\n2. Actual Joke\nAnswer here:');
if(answer === '1') jokeRandomizer.generateRandomJoke();
else jokeRandomizer.generateActualJoke();
