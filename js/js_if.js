var msg="";
var time = new Date().getHours();
if(time < 12){
    msg = "Good Morning";
} else if(time < 18){
    msg = "Good Afternoon";
} else {
    msg = "Good evening";
}
alert(msg);