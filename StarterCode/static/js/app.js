// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//// Part 1 ////

// data.forEach(function(UFOsighthings) {
//     console.log(UFOsighthings);
//     var row = tbody.append("tr");

//     Object.entries(UFOsighthings).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = tbody.append("td");
//         cell.text(value);
//     });
// });

data.forEach((UFOsighthings) => {
    console.log(UFOsighthings);
    var row = tbody.append("tr");
    Object.entries(UFOsighthings).forEach(([key, value]) => {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

