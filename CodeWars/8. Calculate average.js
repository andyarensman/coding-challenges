/*
function for average
*/

function findAverage(array) {
  if (!array.length) return 0;
  let response = 0;
  for (let i = 0; i < array.length; i++) {
    response += array[i];
  }

  return response / array.length;
}
