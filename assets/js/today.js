// JavaScript Document
function showLocale(objD)
{
var str,colorhead,colorfoot;
	
var ww = objD.getDay();
if ( ww==0 ) colorhead="<font color=\"#9e9e9e\">";
if ( ww > 0 && ww < 6 ) colorhead="<font color=\"#9e9e9e\">";
if ( ww==6 ) colorhead="<font color=\"#9e9e9e\">";
if (ww==0) ww="SUNDAY";
if (ww==1) ww="MONDAY";
if (ww==2) ww="WEDNESDAY";
if (ww==3) ww="WEDNESDAY";
if (ww==4) ww="THURSDAY";
if (ww==5) ww="FRIDAY";
if (ww==6) ww="SATURDAY";
colorfoot="</font>"
str = colorhead + ww + colorfoot;
return(str);
}
function tick()
{
var today;
today = new Date();
document.getElementById("localtime").innerHTML = showLocale(today);
window.setTimeout("tick()", 1000);
}
tick();