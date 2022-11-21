const names = ["곽호성","김나영","김동완","김반석","김성진","김세훈","김용운","문수찬","박주현","서경원","성다영","안병준","오세원","유승민","장은비","장현수","정효영","조규범","조상용","차승현","최석호","한승현"];
function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}
shuffle(names);
console.log(names);
const nums = [5, 5, 6, 6];
shuffle(nums);
console.log(nums);


var team1 = Array(nums[0]);
var team2 = Array(nums[1]);
var team3 = Array(nums[2]);
var team4 = Array(nums[3]);



for(var i = 0; i<nums[0];i++){
    team1[i] = names[i];
}
var start = team1.length;
var end = team1.length+team2.length;
for(var i = start;i<end;i++){
    team2[i-start] = names[i];
}
start = team1.length+team2.length;
end = team1.length+team2.length+team3.length;
for(var i = start;i<end;i++){
    team3[i-start] = names[i];
}
start = team1.length+team2.length+team3.length;
end = team1.length+team2.length+team3.length+team4.length;
for(var i = start;i<end;i++){
    team4[i-start] = names[i];
}
console.log(team1);
console.log(team2);
console.log(team3);
console.log(team4);
