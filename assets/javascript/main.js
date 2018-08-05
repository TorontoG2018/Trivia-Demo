
var count = 15;

var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){ 
    document.getElementById("number").innerHTML = "Time is up"  

    if(correct=0){
        alert("You have answered 0 questions");
    }
   clearInterval(interval);
  }
}, 1000);
  

console.log("javascript connected");

function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;
    
    console.log(correct);
    

    if (question1 == "Ottawa"){
        correct++;
    }
    console.log(correct);
    if (question2 == "Kiev"){
        correct++;
    }
    console.log(correct);
    if (question3 == "Paris"){
        correct++;
    }
    console.log(correct);
    if (question4 == "Rome"){
        correct++;
    }
    console.log(correct);

 

 
document.getElementById("number").innerHTML = ((correct)+"/4correct answers");  

}
 










