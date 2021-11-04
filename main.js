/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/************ QUERIES *****************************/

const palette = document.querySelector(".palette")
const canvas = document.querySelector(".canvas")

let isMouseDown = false

/************ EVENT LISTENER FUNCTIONS ************/

palette.addEventListener("click", e => {
  const brush = document.querySelector(".current-brush")
  brush.className = `${brush.classList[0]} ${e.target.classList[1]}`
})

canvas.addEventListener("click", e => {
  const brush = document.querySelector(".current-brush")
  e.target.className = `${e.target.classList[0]} ${brush.classList[1]}`
})

canvas.addEventListener("mouseover", e => {
  const brush = document.querySelector(".current-brush")
  if(isMouseDown === true) {
    e.target.className = `${e.target.classList[0]} ${brush.classList[1]}`
  }
})

document.addEventListener("mouseup", () => {
  isMouseDown = false
})

document.addEventListener("mousedown", () => {
  isMouseDown = true
})

/************ WIRING IT ALL TOGETHER **************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
