/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/play.png"
startButton.width=100;
startButton.hitBoxWidth=100
startButton.height=60;
startButton.hitBoxHight=60
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/mrt.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			// start background music and change to the game state
			if(typeof sounds !== 'undefined') sounds.play(`backroundmusic`, 0, true)
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.color = `yellow`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
}
	
	
