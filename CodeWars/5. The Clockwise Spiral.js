/*
Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

1    2    3    
8    9    4    
7    6    5    
N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7
N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

1   2   3   4   5    
16  17  18  19  6    
15  24  25  20  7    
14  23  22  21  8    
13  12  11  10  9
*/

//! I wasn't quite able to solve this one on my own, ended up using the chat GPT solution. It kept track of the start and end position of both the row and column whereas I tried to do it by only keeping track of the row. We both kept track of the changing length of N.

function createSpiral(N) {
  if (N < 1 || !Number.isInteger(N)) {
    return [];
  }

  let response = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => 0)
  );
  let count = 1;
  let startRow = 0;
  let endRow = N - 1;
  let startColumn = 0;
  let endColumn = N - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    // Traverse top row
    for (let i = startColumn; i <= endColumn; i++) {
      response[startRow][i] = count;
      count++;
    }
    startRow++;

    // Traverse right column
    for (let i = startRow; i <= endRow; i++) {
      response[i][endColumn] = count;
      count++;
    }
    endColumn--;

    // Traverse bottom row
    if (startRow <= endRow) {
      for (let i = endColumn; i >= startColumn; i--) {
        response[endRow][i] = count;
        count++;
      }
      endRow--;
    }

    // Traverse left column
    if (startColumn <= endColumn) {
      for (let i = endRow; i >= startRow; i--) {
        response[i][startColumn] = count;
        count++;
      }
      startColumn++;
    }
  }

  return response;
}
