# CreativeProject

This project uses p5.js locally (rather than in the browser) to showcase different emojis based on mouse clicks or key events. 

---- SETUP ----
To set up the canvas, you use the setup function (lines 15-20 in sketch.js). I've set my canvas to the half of the window width and 500 pixels in height. 

Each of the functions also need to be set to false to make sure they only activate on the click event. These are listed at the top of sketch.js. You will also see where I place a couple of arrays to hold emojis for a certain interaction. There is no specific length needed for these! 

---- DRAW ----
The drawing function is based on if and else statements. So if a key is pressed, (lines 111-156 in sketch.js), it will select the correct funtion to show on screen. 

Each of the animations is based on math and adding multiple random rgb values to the background value. The text() function is what actually shows the emoji on screen. 

---- FUNCTIONS -----
There are four types of animation functions in this project. 

The first causes a slight movement back and forth, and I call it the earthquake function. The earthquake function is set up using the emoji you want, the width plus a random amount of pixels to cause movement, and the height with a random amount of pixels to cause movement. The background is a random rgb color to cause flashing. 

The second makes the emoji turn in a complete circle. To do this, you push the emoji, translate it in to be centered, rotate it with a radians function, and then pop it to complete. 

The third makes a lot of emojis move in a random order. This is where the use of arrays comes in. Essentially, the function will loop through the length of the array and show the index value on screen at randomized places. 

The fourth and final is just a function that makes the emoji move down the canvas in a straight line. This is created using x and y functions to move the emoji down the page and then reset it to the top once it reaches the bottom. 

---- KEY AND MOUSE EVENTS ----
There are 8 different key and mouse events. 

Down Arrow = Sad Emoji
Enter Key = Dancing Emoji
Space Bar = Pumpkins
Backspace = Heart face
Tab = Sleeping
Escape = Cowboys
Left Arrow = Crazy face
Shift = Hearts
