/* You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

//! A lot of the other solutions converted to a string first and were a little faster, but this is still O(n), I think

function expandedForm(num) {
  let returnVal = [];
  let tempNum = num;
  for (let i = 10; i < num; i *= 10) {
    let module = tempNum % i;
    if (module === 0) continue;
    returnVal.unshift(module);
    tempNum -= module;
  }
  returnVal.unshift(tempNum);

  return returnVal.join(" + ");
}
