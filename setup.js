var population;
var lifespan = 400;
var lifeP;
var count = 0;
var target;
var maxforce = 0.2;

var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  let canv = createCanvas(400, 300);
  canv.position(350,0);
  population = new Population();
  lifeP = createP();
  timer = createP();
  target = createVector(width / 2, 50);
  


}
let time = 0;
function draw() {
  background(0);
  population.run();
  lifeP.html('Life Count : ');
  lifeP.html(count, true);
  timer.html('Time elapsed: ');
  let m = time/60;
  
  let t = m.toString();
  let mi = parseInt(t);
  timer.html(mi/60, true);
  
  timer.html(' minutes ', true);
  timer.html(time%60, true);
  timer.html(' seconds ', true);
  if (frameCount % 60 == 0){
  time++;
  }

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
 
    count = 0;
  }
  
  fill(255);
  rect(rx, ry, rw, rh);
  ellipse(target.x, target.y, 16, 16);
}
