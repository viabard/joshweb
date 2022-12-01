//this variable will hold our shader object
let shapeShader;
let blobs = [];
let blob_locations = [];
let num_blobs = 1;

function preload(){
  theShader = loadShader('assets/onecolor.vert', 'assets/onecolor.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);
  for(let i = 0; i < num_blobs; i++){
    blobs.push(new MyBlob(0, 0, 10, 10));
  }
}

function draw() {  
  
  // shader() sets the active shader with our shader
  shader(theShader);
  
  // lets send the resolution, mouse, and time to our shader
  // before sending mouse + time we modify the data so it's more easily usable by the shader
  theShader.setUniform('resolution', [width, height]);
  theShader.setUniform('mouse', [map(mouseX, 0, width, 0, 1), map(mouseY, 0, height, 0, 1)]);
  theShader.setUniform('time', frameCount * 0.01);
  theShader.setUniform('blobs', blobs.map(Object.values));
  
  
  // rect gives us some geometry on the screen
  
  rect(0, 0);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}