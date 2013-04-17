//  Copyright (c) 2013 Tauran Wood
//  
//  Copying and distribution of this file, with or without modification, is permitted in any medium without royalty provided the copyright notice and this notice are preserved.
//  This file is offered as-is,without warranty of any kind.
$(document).ready(function() { resize() });
function resize(){
	var h=window.innerHeight;
	var w=window.innerWidth;
	if (w<887) {
		$("#menu").css('height','80px');
		h-=40;
	}
	else {
		$("#menu").css('height','40px');
	}
	if (w<498) {
		h-=40;
		$("#menu").css('height','120px');
	}
	w-=58;
	h-=84;
	
	if (w<=h) {
		$("#canvas").css('width',w+'px');
		$("#canvas").css('height',w+'px');
	}
	else {
		$("#canvas").css('width',h+'px');
		$("#canvas").css('height',h+'px');
	}
};
