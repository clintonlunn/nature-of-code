let xoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50)
  // var x = random(width)
  var x = map(noise(xoff), 0, 1, 0, width)

  xoff += .01;

  ellipse(x, 200, 24, 24, width);
}