var computerNumber = Math.round(Math.random()*100);
var nGuess = 0;

function guess(){
    var result = "";
    var number = parseInt(document.getElementById("user").value);
    nGuess++;
    if(number == computerNumber){ 
        result = "성공입니다.";
    } else if(number > computerNumber){
        result = "낮습니다.";
    } else{
        result = "높습니다.";
    }

    document.getElementById("result").value= result;
    document.getElementById("guess").value = nGuess;
    return true;
}