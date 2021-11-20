var input=require("readline-sync");
var chalk=require("chalk")
var score=0;
var userName=input.question("what's your name: ");
console.log(chalk.blue("welcome! "+userName+"  DO YOU KNOW Tanjum"));
function playGame(question,answer){
  var userAnswer=input.question(chalk.green(question));
  if (userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log(chalk.blue("right!"));
    score+=1
    providers
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
  question:"My birthplace is? ",
  answer:"mahalingpur"

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
    console.log("-------");providers
}