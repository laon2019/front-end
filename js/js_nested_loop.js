document.write("<h1>구구단 표</h1>");
document.write("<table border=2 width=50%>");
for(var i = 1; i<=9;i++){
    document.write("<tr>");
    document.write("<th>"+i+"단</th>");
    for(var j = 2; j<=9;j++){
        document.write("<td>"+i*j+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");