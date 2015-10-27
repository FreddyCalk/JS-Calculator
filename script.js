function doIt(theExpression){

	try{
		var total = eval(theExpression);
	} catch (e){
		if( e instanceof SyntaxError){
			alert("ERROR!! ERROR!! ERROR Numbers are required to compute... Error!" );
			return;
		}
	}
	if(total === 5318008){
		var element = document.getElementById('boobies'),
			left = -500,
			lastFrame = +new Date,
			timer;
			document.getElementById('calculator').style.transform = "rotateZ(180)";
		//Move the element right 600px
		timer = setInterval(function(){
			var now = +new Date,
			deltaT = now - lastFrame;
			element.style.left = (left += 15 * deltaT / 16) + "px";
			lastFrame = now;
			//clear the time and stop the animation
			if(left > 3000){
				clearInterval(timer);
			}
		}, 16);

	}
	if(total === 13){
			var element = document.getElementById('scream'),
			left = -500,
			lastFrame = +new Date,
			timer;
		//Move the element right 600px
		timer = setInterval(function(){
			var now = +new Date,
			deltaT = now - lastFrame;
			element.style.left = (left += 15 * deltaT / 16) + "px";
			lastFrame = now;
			//clear the time and stop the animation
			if(left > 3000){
				clearInterval(timer);
			}
		}, 16);

	}
	if(total===666){
		var element = document.getElementById('devil'),
			left = -500,
			lastFrame = +new Date,
			timer;
		//Move the element right 600px
		timer = setInterval(function(){
			var now = +new Date,
			deltaT = now - lastFrame;
			element.style.left = (left += 15 * deltaT / 16) + "px";
			lastFrame = now;
			//clear the time and stop the animation
			if(left > 3000){
				clearInterval(timer);
			}
		}, 16);
	}


	if(total == 42){
		var snd = new Audio("spaceship.m4a");
		snd.play();
		var element = document.getElementById('meaning'),
			left = -500,
			lastFrame = +new Date,
			timer;
		//Move the element right 600px
		timer = setInterval(function(){
			var now = +new Date,
			deltaT = now - lastFrame;
			element.style.left = (left += 15 * deltaT / 16) + "px";
			lastFrame = now;
			//clear the time and stop the animation
			if(left > 3000){
				clearInterval(timer);
			}
		}, 16);
	}

		var total = eval(theExpression);
		Calc.Input.value = total;

}







