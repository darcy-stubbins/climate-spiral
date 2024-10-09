let data;
let months;

//zero radius is 75px from the center & one radius is 150px from the center 
let zeroRadius = 75;
let oneRadius = 150;

//put the global temps data into a table 
function preload() {
  data = loadTable("climateData.csv", "csv", "header");
}

function setup() {
  createCanvas(600, 600);
  // console.log(data.getRowCount());
  // console.log(data.getColumnCount());

  //getting all 12 months from the data (starting at march so dec is at 12 position)
  months = [
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
  ];
  // months = data.columns.slice(1, 13);
  // console.log(months);

  let row = data.getRow(0);
  // console.log(row.get("Year"));
  // console.log(row.getNum("Jan"));
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  //draw 0° circle 
  stroke(255);
  strokeWeight(2);
  noFill();
  circle(0, 0, zeroRadius * 2);
  fill(255);
  noStroke();
  textSize(24);
  text("0°", zeroRadius + 5, 0);

  //draw 1° circle 
  stroke(255);
  strokeWeight(2);
  noFill();
  circle(0, 0, oneRadius * 2);
  fill(255);
  noStroke();
  textSize(24);
  text("1°", oneRadius + 5, 0);

  //showing the month labels 
  stroke(255);
  strokeWeight(2);
  noFill();
  circle(0, 0, 500);

  for (let i = 0; i < months.length; i++) {
    noStroke();
    fill(255);
    textAlign(CENTER);
    textSize(24);
    let angle = map(i, 0, months.length, 0, TWO_PI);
    push();
    let x = 264 * cos(angle);
    let y = 264 * sin(angle);
    translate(x, y);
    rotate(angle + PI / 2);
    text(months[i], 0, 0);
    pop();
  }

  let row = data.getRow(140);
  let year = row.get("Year");
  textAlign(CENTER, CENTER);
  textSize(24);
  text(year, 0, 0);
  console.log(year);

  for (let i = 0; i < months.length; i++) {
    let anomaly = row.getNum(months[i]);
    let angle = map(i, 0, months.length, 0, TWO_PI) + PI / 2;
    //0 degree is mapped to 75px and 1 degree is mapped to 150px
    let r = map(anomaly, 0, 1, 75, 150);

    let x = r * cos(angle);
    let y = r * sin(angle);
    circle(x, y, 8);
  }
  noLoop();
}