const jokeRandomizer = {
    _whosThereAnswer: ['Yah',],
    _punchLine: ['Naaah, bro, I prefer google.'],

    // Getter for 
    get whosThereAnswer(){
        let answer = Math.floor(Math.random()*this._whosThereAnswer.length);
        return this._whosThereAnswer[answer];    
    },
    get punchLine(){
        let answer = Math.floor(Math.random()*this._punchLine.length);
        return this._punchLine[answer];
    },
    answerWho(answer){
        return `${answer} who?`;
    },
    generateJoke(){
        let answer = this.whosThereAnswer;
        console.log('Knock Knock!');
        console.log('Who\'s there?');
        console.log(answer);
        console.log(this.answerWho(answer));
        console.log('...')
        console.log(this.punchLine);
    }
}

jokeRandomizer.generateJoke();