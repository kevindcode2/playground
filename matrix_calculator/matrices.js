// ### Format your matrices like this:

var m1 = [
  [1, 2, 3],
  [4, 5, 6]
];

var m2 = [
  [7, 8],
  [9, 10],
  [11, 12]
];

// ### Resultant matrix will look like this:

// Multiply
var m1xm2 = [
  [58, 64],
  [139, 154]
];


function dotProduct(matrix_one, matrix_two) {
  if (checkIfValid('*', matrix_one, matrix_two)) {
    var m1_row_length = matrix_one.length;
    var m1_col_length = matrix_one[0].length;
    var m2_col_length = matrix_two[0].length;
    var result = []; // create a empty container called 'result'

    for (var i = 0; i < m1_row_length; i++) { // every row in m1
      var counter = 0;
      var newRow = [];
      while(counter < m2_col_length) { // ever column in m2
        var sum = 0;
        for (var j = 0; j < m1_col_length; j++) {
          sum += matrix_one[i][j] * matrix_two[j][counter];
        }
        newRow.push(sum);
        counter++;
      }
      result.push(newRow);
    }
    return result;
  }
}

function checkIfValid(calculation_type, matrix_one, matrix_two) {
  var m1_row_length = matrix_one.length;
  var m1_col_length = matrix_one[0].length;
  var m2_row_length = matrix_two.length;
  var m2_col_length = matrix_two[0].length;

  if (calculation_type == '*') {
    // checks to see if matrices are valid
    for (var i = 0; i < matrix_one.length; i++) {
      if (matrix_one[i].length != m1_col_length) {
        console.log("matrix_one is invalid");
        return false;
      }
    }

    for (var i = 0; i < matrix_two.length; i++) {
      if (matrix_two[i].length != m2_col_length) {
        console.log("matrix_two is invalid");
        return false;
      }
    }

    if (m1_row_length == m2_col_length) { // = compatible
      console.log("Nice! These matrices can multiply with each other");
      return true;
    } else {
      console.log("these matrices cannot be multipled together");
      return false;
    }
  } else if (calculation_type == '/') {

  } else if (calculation_type == '+') {

  } else if (calculation_type == '-') {

  } else {
    console.log("invalid operator used; please use either *, /, +, or -");
  }

}
