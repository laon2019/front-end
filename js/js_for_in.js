var myCar = {make: "BMW", model:"X5", year:2013};
var txt="";
for(var x in myCar){
    document.write(x+":"+myCar[x]+"<br>");
    txt += myCar[x]+" ";
}
document.write(txt);