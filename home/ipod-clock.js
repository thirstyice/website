"use strict";function y(){var x=setTimeout('y()',500);var a=new Date();var h=a.getHours();var m= a.getMinutes();var g=Math.floor(m/10);var l=m-(g*10);$("#clock").html(h+":"+g+""+l);return;}$(document).ready(y());
