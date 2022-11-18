const myCar ={
    model : "520d",
    speed : 60,
    color : "red",
    brake : function(){ this.speed -= 10;},
    accel : function(){ this.speed += 10;}
};
console.log(myCar);
myCar.accel();
console.log(myCar.accel);
console.log(myCar);
myCar.color = "yellow";
myCar.brake();