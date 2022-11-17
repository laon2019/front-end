function calc(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var sum = parseInt(x)+parseInt(y);
    sum = document.getElementById("sum").value = sum;
    var h1 = document.getElementById("header1");
    h1.style.color = "red";
}