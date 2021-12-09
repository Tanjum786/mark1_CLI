var input=require("readline-sync");
var chalk=require("chalk")
var score=0;
var userName=input.question("what's your name: ");
console.log(chalk.blue("welcome! "+userName+"  DO YOU KNOW Me"));
function playGame(question,answer){
  var userAnswer=input.question(chalk.green(question));
  if (userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log(chalk.blue("right!"));
    score+=1
  }else{
    console.log(chalk.red("wrong!"))
  }
  console.log("your current score! ",score)
  console.log("----------")
}
var questions=[{
  question:"which is my favorite color? ",
  answer:"skyblue"},{
  question:"what i like most tea or coffee?",
  answer:"tea"},{
  question:"what is my hobbie? ",
  answer:"Collecting shayari"

  },{
    question:"which choclate i like's more",
    answer:"dairy milk"

  },{
    question:"Do you Know my Birthdate? ",
    answer:"16/12"

  },{
    question:"which is my fvrt Ice-cream flavour? ",
    answer:"Choclate"

  }
]
for(i in questions){
  playGame(questions[i].question,questions[i].answer)
}
console.log(chalk.yellow("yeahh :) you scored! ",score))
var highScorer=[{
    name:"tanjum",
    score:3},
    {
    name:"muskan",
    score:2
}]
console.log(chalk.yellow("If you beaten this highest score plz send me screen shot:) "));
for (i of highScorer){
    console.log(i.name+" : "+i.score);
    console.log("-------")
}