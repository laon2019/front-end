function Car(model, speed, color){
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.brake = function(){
        this.speed -= 10;
    }
    this.accel = function(){
        this.speed += 10;
    }
}
const myCar = new Car("520d", 60, "red");
document.write(myCar);
    