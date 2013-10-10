/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load()
{
    dashcode.setupParts();
}

//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove()
{
    // Stop any timers to prevent CPU usage
    // Remove any preferences as needed
    // widget.setPreferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide()
{
    // Stop any timers to prevent CPU usage
}

//
// Function: show()
// Called when the widget has been shown
//
function show()
{
    // Restart any timers that were stopped on hide
}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync()
{
    // Retrieve any preference values that you need to be synchronized here
    // Use this for an instance key's value:
    // instancePreferenceValue = widget.preferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
    //
    // Or this for global key's value:
    // globalPreferenceValue = widget.preferenceForKey(null, "your-key");
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToBack");
    }

    front.style.display = "none";
    back.style.display = "block";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToFront");
    }

    front.style.display="block";
    back.style.display="none";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

if (window.widget) {
    widget.onremove = remove;
    widget.onhide = hide;
    widget.onshow = show;
    widget.onsync = sync;
}
var week;
var day;
function rotarytime() {
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
//Inner circle, day
ctx.beginPath();
ctx.arc(1120,1120,200,1.5*Math.PI,day*(Math.PI/2.5)-1.5);
ctx.lineWidth = 150;
ctx.strokeStyle = '#00ce00';
ctx.stroke();

//2nd circle, week 
ctx.beginPath();
ctx.arc(1120,1120,400,1.5*Math.PI,week*(Math.PI/36.5)-1.5);
ctx.lineWidth = 150;
ctx.strokeStyle = '#00ce00';
ctx.stroke();

//3rd circle, decidays
ctx.beginPath();
ctx.arc(1120,1120,600,1.5*Math.PI,Math.floor(time()/100)*(Math.PI/5)-1.5);
ctx.lineWidth = 150;
ctx.strokeStyle = '#00ce00';
ctx.stroke();

//4th circle, millidays
ctx.beginPath();
ctx.arc(1120,1120,800,1.5*Math.PI,(((time()/100)-(Math.floor(time()/100)))*100)*(Math.PI/50.5)-1.5);
ctx.lineWidth = 150;
ctx.strokeStyle = '#00ce00';
ctx.stroke();

//5th circle, nanodays
ctx.beginPath();
ctx.arc(1120,1120,1000,1.5*Math.PI,((time()-(Math.floor(time())))*100)*(Math.PI/50.5)-1.5);
ctx.lineWidth = 150;
ctx.strokeStyle = '#00ce00';
ctx.stroke();


if (time()==Math.floor(time())) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var w = canvas.width;
	canvas.width = 1;
	canvas.width = w;
	rotarytime();
}
}


$(document).ready(function () {
	$("#recalc").click(function(){
		$("#timezones").slideToggle("slow");
	});
    $("#recalc").html("Timezone: "+zone);
	date();
	run();
});

var zone = 0;
var sendinvalidlong;
var longitude;

function timezone() {
    var txtbox = document.getElementById("txtbox").value;
    var hemisphere = document.getElementById("hemisphere").selectedIndex;
    var hemisphere = document.getElementsByTagName("option")[hemisphere].value
    longitude = txtbox
    if (hemisphere == "West"){
        if (longitude > 180 ){
            $("#recalc").html("Timezone: "+zone);
        }
        if (longitude > 168 && longitude <= 180){
            zone = -200;
        }
        if (longitude <= 168 && longitude > 132){
            zone = -100;
        }
        if (longitude <= 132 && longitude > 96){
            zone = 0;
        }
        if (longitude <= 96 && longitude > 60){
            zone = 100;
        }
        if (longitude <= 60 && longitude > 24){
            zone = 200;
        }
        if (longitude <= 24){
            zone = 300;
        }
    }
    if (hemisphere == "East"){
        if (longitude > 180){
            $("#recalc").html("Timezone: "+zone);
        }
        if (longitude >156 && longitude <= 180){
            zone = -200;
        }
        if (longitude <= 156 && longitude > 120){
            zone = -300;
        }
        if (longitude <= 120 && longitude > 84){
            zone = -400;
        }
        if (longitude <= 84 && longitude > 48){
            zone = 500;
        }
        if (longitude <= 48 && longitude > 12){
            zone = 400;
        }
        if (longitude <= 12 && longitude >= 0){
            zone = 300;
        }
    }
    $("#recalc").html("Timezone: "+zone);
}
function area1(){
    zone = -200;
    $("#recalc").html("Timezone: "+zone);
}
function area2() {
    zone = -100;
    $("#recalc").html("Timezone: "+zone);
}
function area3() {
    zone = 0;
    $("#recalc").html("Timezone: "+zone);
}
function area4() {
    zone = 100;
    $("#recalc").html("Timezone: "+zone);
}
function area5() {
    zone = 200;
    $("#recalc").html("Timezone: "+zone);
}
function area6() {
    zone = 300;
    $("#recalc").html("Timezone: "+zone);
}
function area7() {
    zone = 400;
    $("#recalc").html("Timezone: "+zone);
}
function area8() {
    zone = 500;
    $("#recalc").html("Timezone: "+zone);
}
function area9() {
    zone = -400;
    $("#recalc").html("Timezone: "+zone);
}
function area10() {
    zone = -300;
    $("#recalc").html("Timezone: "+zone);
}
function time() {
	var today = new Date();
	var time = (Math.floor(((today.getUTCHours() * 60 * 60 * 1000) + (today.getUTCMinutes() * 60 * 1000) + (today.getUTCSeconds() * 1000) + today.getUTCMilliseconds()) / 864 + (zone * 100)));
    time += -25000;
    while (time > 100000){
        time -= 100000;
    }
    while (time < 0){
        time += 100000;
    }
    time = time / 100;
    return time;
}

function run() {
	var t = setTimeout('run()', 432);
	rotarytime();
    if (time()==0) {
	
	}
}

function date() {
	var today = new Date();
	var first = new Date(today.getFullYear(), 0, 1);
	var Ord = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
    var year = today.getFullYear()
    if ((year %4 == 0 && (year % 100 != 0 || year % 400 == 0)) && today.getMonth >1) {
        Ord+=1
    }
    week = Math.floor((Ord-1)/5);
    day = Ord-(5*week)-0.1;
    if (Ord != 366) {
		return day;
    }
    else {
        return 5;
    }
}