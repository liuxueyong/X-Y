

function getRTime(){
var EndTime= new Date('2020/8/31 00:00:00'); //CD
var NowTime = new Date();
var t =EndTime.getTime() - NowTime.getTime();
 
var d=Math.floor(t/1000/60/60/24);
var h=Math.floor(t/1000/60/60%24);
var m=Math.floor(t/1000/60%60);
var s=Math.floor(t/1000%60);
 
document.getElementById("td").innerHTML = d + " DAY ";
document.getElementById("th").innerHTML = h + " :";
document.getElementById("tm").innerHTML = m + " :";
document.getElementById("ts").innerHTML = s + "  ";
}
setInterval(getRTime,1000);