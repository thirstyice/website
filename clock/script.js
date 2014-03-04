//  Copyright (c) 2013 Go software
//  
//  Copying and distribution of this file, with or without modification, is permitted in any medium without royalty provided the copyright notice and this notice are preserved.
//  This file is offered as-is,without warranty of any kind.
"use strict";

var zone = 0

function date() {
	var today = new Date();
	var first = new Date(today.getFullYear(), 0, 1);
	var Ord = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
    var year = today.getFullYear()
    if ((year %4 == 0 && (year % 100 != 0 || year % 400 == 0)) && today.getMonth >1) {
        Ord+=1
    }
    if (Ord == 366) {
		return 0; 	
	}
	else {
		if (Ord/5 == Math.floor(Ord/5)){
			Ord -= 0.01
		}
		return (Ord)/5;
	}
}

function rotarytime() {
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.lineWidth = 150;
	ctx.strokeStyle = '#00ce00';
	if (time()==Math.floor(time())) { //Refreshes the canvas when the clock reaches zero
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	//Inner circle, day
	ctx.beginPath();
	ctx.arc(1120,1120,200,1.5*Math.PI,Math.round((date() - Math.floor(date()))*5)*(Math.PI/2.5)-1.5);
	ctx.stroke();

	//2nd circle, week
	ctx.beginPath();
	ctx.arc(1120,1120,400,1.5*Math.PI,Math.floor(date())*(Math.PI/36.5)-1.5);
	ctx.stroke();

	//3rd circle, decidays
	ctx.beginPath();
	ctx.arc(1120,1120,600,1.5*Math.PI,Math.floor(time()/100)*(Math.PI/5)-1.5);
	ctx.stroke();

	//4th circle, millidays
	ctx.beginPath();
	ctx.arc(1120,1120,800,1.5*Math.PI,(((time()/100)-(Math.floor(time()/100)))*100)*(Math.PI/50.5)-1.5);
	ctx.stroke();

	//5th circle, nanodays
	ctx.beginPath();
	ctx.arc(1120,1120,1000,1.5*Math.PI,((time()-(Math.floor(time())))*100)*(Math.PI/50.5)-1.5);
	ctx.stroke();
}


function timezone() {
    var txtbox = document.getElementById("txtbox").value;
    var hemisphere = document.getElementById("hemisphere").selectedIndex;
    var hemisphere = document.getElementsByTagName("option")[hemisphere].value;
    var longitude = txtbox;
    if (hemisphere == "West"){
    	longitude *= -1;
    }
    longitude -= 12
    zone = Math.floor((longitude / 36) +4)*100;
    while (zone>500) {
    	zone -= 500;
    }
    while (zone<-500) {
    	zone += 500;
    }
    $("#recalc").html("Timezone: "+zone);
}
function area(input) {
	zone=input*100;
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

    time = Math.floor(time);
    time = time / 100;
    return time;
}

function run() {
	var t = setTimeout('run()', 432);
	$("#clock").html(time()  + " md");
	$("#title").html(time()  + " md");
	rotarytime();
    if (time()==0) {
		$("#date").html((Math.floor(date())) + "/" + (Math.round((date() - Math.floor(date()))*5)));
	}
}



$(document).ready(function () {
	$("#recalc").click(function(){
		$("#timezones").slideToggle("slow");
	});
	$("#thing").html("The current time is:");
	$("#otherthing").html("The current date is:");
	$("#pizza").html("");
	$("#date").html((Math.floor(date())) + "/" + (Math.round((date() - Math.floor(date()))*5)));
    $("#recalc").html("Timezone: "+zone);
	run();
});

