// a shader variable
let theShader;

function preload(){
  // load the shader
  theShader = loadShader('onecolor.vert', 'onecolor.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0,0,width,height);
  
  // print out the framerate
  //  print(frameRate());
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
