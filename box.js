document.onkeypress = function(e){

	var box = document.getElementsByTagName("box")[0];

	var top = window.getComputedStyle(box).top;

	top = Number(top.replace("px", ""));

	var left = window.getComputedStyle(box).left;
	left = Number(left.replace("px", ""));

	var posx = window.getComputedStyle(box).backgroundPositionX;
	posx = Number(posx.replace("px", ""));

	var posy = window.getComputedStyle(box).backgroundPositionY;
	posy = Number(posy.replace("px", ""));

	if(e.key == 'd'){ //move right
		left += 10;
		left += "px"
		box.style.left = left;

		posy = 320;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;

	}

	if(e.key == 's'){ //move down
		top += 10;
		top += "px"
		box.style.top = top;

		posy = 384;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;


	}

	if(e.key == 'a'){ //move left
	left -= 10;
	left += "px"
	box.style.left = left;

	posx -= 64;
	posx += "px";
	posy = 192;
	posy += "px";
	box.style.backgroundPositionX = posx;		box.style.backgroundPositionY = posy;

	}

	if(e.key == 'w'){ //move up
		top -= 10;
		top += "px"
		box.style.top = top;

		posy = 256;
		posx += 64;
		posx += "px";
		posy += "px";
		box.style.backgroundPositionX = posx;
		box.style.backgroundPositionY = posy;
	}
    console.log(e.key);
    }
