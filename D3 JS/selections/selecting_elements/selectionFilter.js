let allCircles = d3.selectAll("circle");

console.log(allCircles);

let allCirclesOdd = allCircles.filter(":nth-child(odd)");

console.log(allCirclesOdd);

let allCirclesEven = allCircles.filter(":nth-child(even)");

console.log(allCirclesEven);

allCirclesEven = allCircles.filter(".even");

console.log(allCirclesEven);

allCirclesOdd = allCircles.filter(".odd");

let circleFn = allCircles.filter(function (d, i, n) {
  i % 2 == 0 ? (this.style.fill = "orange") : (this.style.fill = "pink");
});
