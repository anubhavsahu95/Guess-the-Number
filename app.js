var msg1=document.getElementById("message1");
var msg2=document.getElementById("message2");
var msg3=document.getElementById("message3");

var answer=Math.floor(Math.random()*100)+1;
var no_of_guess=0;
var guss=[];

function play(){
    var user_guess=document.getElementById("guess").value;
    if(user_guess<1 || user_guess>100){
        alert("Please Enter a no. between 1-100");
    }
    else{
        guss.push(user_guess);
        no_of_guess+=1;

        if(user_guess>answer)
        {
            msg1.textContent="Your Guess is too High";
            msg2.textContent="No. of Guesse: "+no_of_guess;
            msg3.textContent="Guessed no. are: "+guss;
        }
        else if(user_guess<answer)
        {
            msg1.textContent="Your Guess is too Low";
            msg2.textContent="No. of Guesse: "+no_of_guess;
            msg3.textContent="Guessed no. are: "+guss;
        }
        else if(user_guess==answer)
        {
            msg1.textContent="Yasss ! Your Guess is Correct";
            msg2.textContent = "the Number was " + answer;
            msg3.textContent = " You guessd it in  " +   no_of_guesses   +"Guesses";
        }
    }
    
}