const readline = require('readline-sync');

const jokeRandomizer = {
    _whosThereAnswer: ['Yah','Kenya','Dishes!'],
    _punchLine: ['Naaah, bro, I prefer google.','Kenya feel the love tonight?', 'Dishes the Police come out with your hands up'],

    // Getter for 
    get whosThereAnswer(){
        return this._whosThereAnswer;    
    },
    get punchLine(){
        return this._punchLine;
    },
    answerWho(answer){
        return `${answer} who?`;
    },
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

let answer = readline.question('JOKE MENU:\n1. Nonsensical joke\n2. Actual Joke\nAnswer here:');
if(answer === '1') jokeRandomizer.generateRandomJoke();
else jokeRandomizer.generateActualJoke();
