// this is a modification of a shader by adam ferriss
// https://github.com/aferriss/p5jsShaderExamples/tree/gh-pages/5_shapes/5-3_polygon

precision mediump float;

// these are known as preprocessor directive
// essentially we are just declaring some variables that wont change
// you can think of them just like const variables

#define PI 3.14159265359
#define TWO_PI 6.28318530718

// we need the sketch resolution to perform some calculations
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform int u_numBlobs;
uniform float u_blobs[100*4]; // MAX 100 BLOBS


// this is a function that turns an rgb value that goes from 0 - 255 into 0.0 - 1.0
vec3 rgb(float r, float g, float b){
  return vec3(r / 255.0, g / 255.0, b / 255.0);
}

vec2 rotate2D (vec2 _st, float _angle) {
  _st -= 0.5;
  _st =  mat2(cos(_angle),-sin(_angle),
              sin(_angle),cos(_angle)) * _st;
  _st += 0.5;
  return _st;
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy; // if this is weird, make sure pixelDensity is set to 1 in p5
  
  vec3 color = vec3(0.0, 0.0, 0.0);

  
  st = rotate2D(st, PI*2.0/3.0);
  color.y = st.y;
  st = rotate2D(st, PI*2.0/3.0);
  color.z = st.y;
  st = rotate2D(st, PI*2.0/3.0);
  color.x = st.y;
  
  gl_FragColor = vec4(color, 1.0);
}