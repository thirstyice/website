//  Copyright (c) 2013 Tauran Wood
//  
//  Copying and distribution of this file, with or without modification, is permitted in any medium without royalty provided the copyright notice and this notice are preserved.
//  This file is offered as-is,without warranty of any kind.
function unroll() {
	$('body').removeClass('roll');
}
function roll() {
	$('body').addClass('roll');
	window.setTimeout('unroll()',4010)
}
