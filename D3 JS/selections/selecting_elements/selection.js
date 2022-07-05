const h1 = d3.select("h1");
console.log(h1);

let firstSVG = d3.select("svg");

firstSVG = d3.select("svg#circle");

firstSVG = d3.select("#circle");

console.log(firstSVG);

let secondSvg = d3.select("rect");

secondSvg = d3.select("svg:nth-of-type(2)");

console.log(secondSvg);

let firstCircle = d3.select("circle");

console.log(firstCircle);

let secondCircle = d3.select("circle:nth-of-type(2)");

console.log(secondCircle);

let firstRect = d3.select("rect");

console.log(firstRect);

let secondRect = d3.select("rect:nth-of-type(2)");

console.log(secondRect);

firstRect = secondSvg.select("rect");

console.log(firstRect);

secondSvg.select(function (d, i, n) {
  console.log(d);
  console.log(i);
  console.log(n);
  console.log(n[i]);
});
