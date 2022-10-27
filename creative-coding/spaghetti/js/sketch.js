// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint;

var engine;
var world;
var boxes = [];
var ground;
var spaghetti = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    Matter.Runner.run(engine);

    // set up pot

    let pot_x = windowWidth/2;
    let pot_width = 4*windowWidth/5;
    let pot_y = 4*windowHeight/5;
    let pot_height = 1*windowHeight/20;
    let pot_box_width = 50;

    let pot_color = 'rgb(56, 50, 0)';

    // bottom 
    boxes.push(new Box(pot_x, pot_y, pot_width, pot_box_width, true, pot_color));
    // left
    boxes.push(new Box(pot_x - pot_width/2, pot_y - pot_height*6, pot_box_width, pot_height*12, true, pot_color))
    // right
    boxes.push(new Box(pot_x + pot_width/2, pot_y - pot_height*6, pot_box_width, pot_height*12, true, pot_color))

    // bunch of spaghetti
    var num_spaghetti = 10;
    for (let i = 0; i < num_spaghetti; i++){
        spaghetti.push(new Spaghetti(pot_x + Math.random() * pot_width - pot_width/2, 0));
    }

}

function draw() {
    background(255);
    for (var i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    for (var i = 0; i < spaghetti.length; i++){
        spaghetti[i].show();
    }

}

function mouseDragged(){
    
}

function mouseWheel(){
    boxes.push(new Box(mouseX, mouseY, 20, 20));
}
