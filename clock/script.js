//  Copyright (c) 2013 Go software
//  
//  Copying and distribution of this file, with or without modification, is permitted in any medium without royalty provided the copyright notice and this notice are preserved.
//  This file is offered as-is,without warranty of any kind.
"use strict";

var zone = 0
var sendinvalidlong
var longitude

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

    time = Math.floor(time);
    time = time / 100;
    return time;
}

function run() {
	var t = setTimeout('run()', 432);
	$("#clock").html(time()  + " md");
	$("#title").html(time()  + " md");
    if (time()==0) {
		$("#date").html(date());
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
    var week = Math.floor((Ord-1)/5);
    var day = Ord-(5*week);
    if (Ord != 366) {
        return week + "/" + day;
    }
    else {
        return "Leap day"
    }
}

$(document).ready(function () {
	$("#recalc").click(function(){
		$("#timezones").slideToggle("slow");
	});
	$("#thing").html("The current time is:");
	$("#otherthing").html("The current date is:");
	$("#pizza").html("");
	$("#date").html(date());
    $("#recalc").html("Timezone: "+zone);
	run();
});

