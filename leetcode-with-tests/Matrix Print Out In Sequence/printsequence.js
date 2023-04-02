let matrix = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 9, 27, 28, 29],
  [5, 4, 3, 2, 1],
  [10, 20, 30, 40, 50],
];

export function arrSequenceRow() {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      console.log(matrix[row][col]);
    }
  }
}

export function arrSequenceColumn() {
  for (let row = matrix[0].length - 1; row >= 0; row--) {
    for (let vert = 0; vert < matrix.length; vert++) {
      console.log(matrix[row][vert]);
    }
  }
}

export function arrSequenceDiagz() {
  for (let iterator = matrix.length - 1; iterator >= 0; iterator--) {
    let row = matrix[0].length - 1;
    let col = iterator;
    while (row >= 0 && col >= 0) {
      console.log(matrix[row][col]);
      row--;
      col--;
    }
  }
}

arrSequenceRow();
console.log(" ");
arrSequenceColumn();
console.log(" ");
arrSequenceDiagz();
