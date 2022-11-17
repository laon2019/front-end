var fruits = new Array();
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Orange";
fruits.push("abcd");
delete fruits[2];

for(var i = 0;i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
}
fruits[a] = "사과";
fruits[b] = "바나나";
document.write(fruits[a]+"<br>");
document.write(fruits[b]+"<br>");
