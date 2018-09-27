// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Part 1 ////

var tbody = d3.select("tbody");

data.forEach((UFOsighthings) => {
  console.log(UFOsighthings);
  var row = tbody.append("tr");
  Object.entries(UFOsighthings).forEach(([key, value]) => {
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});

var submit = d3.select("#submit");

submit.on("click", function() {
  d3.event.preventDefault();

  d3.select(".summary").html("");

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach((dateData) => {
    console.log(dateData);
    var row = tbody.append("tr");
    Object.entries(dateData).forEach(([key, value]) => {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});