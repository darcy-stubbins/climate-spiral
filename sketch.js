let data;

//put the global temps data into a table 
function preload() {
  data = loadTable("climateData.csv", "csv", "header");
}

function setup() {
  createCanvas(400, 400);
  console.log(data.getRowCount());
  console.log(data.getColumnCount());
}

function draw() {
  background(220);
}