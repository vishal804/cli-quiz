var readlineSync = require ("readline-sync");
const chalk = require('chalk');

var score = 0;
var contestentName = readlineSync.question("Please Enter Your Name "); 
console.log("Welcome ",contestentName);


function play(question, answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
        console.log(chalk.green("Yor are Right "));
        score++
    } else {
        console.log(chalk.red("You are Wrong "));
        score--
    }
}

var questions = [{
        question:`1. What is the state flower of Haryana? 

        A:Lotus 
        B:Rhododendron
        C:Golden Shower
        D:Not declared 
        `, 
        answer:"A"
    }, {
        question:`2. Which of the following is the capital of Arunachal Pradesh?
    
        A:Itanagar
        B:Dispur
        C:Imphal
        D:Panaji
        `,
        answer:"A"
        }, {
        question:`3. Which of the following states is not located in the North?
    
        A:Jharkhand
        B:Jammu and Kashmir
        C:Himachal Pradesh
        D:Haryan
        `,
        answer:"A"
    }, {
        question:`4. Which is the largest coffee producing state of India?
    
        A:Kerala
        B:Tamil Nadu
        C:Karnataka
        D:Arunachal Pradesh
        `,
        answer:"C"
    }, {
        question:`5. Which state has the largest area?
    
        A:Maharashtra
        B:Madhya Pradesh
        C:Uttar Pradesh
        D:Rajasthan
        `,
        answer:"D"
    }]


for(var i=0; i<questions.length; i++){
    play(questions[i].question, questions[i].answer);
}

console.log(chalk.blue.bold("Your Score is ", score));


