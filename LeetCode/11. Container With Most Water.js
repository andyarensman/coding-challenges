// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

//! My first try was just a test - I knew it would be way to slow because it goes through everything

var maxArea = function (height) {
  let output = 0;

  for (let length = height.length - 1; length > 0; length--) {
    for (var i = 0; i < length; i++) {
      let lesserNumber =
        height[i] <= height[length] ? height[i] : height[length];
      let tempOutput = lesserNumber * (length - i);

      if (tempOutput > output) {
        output = tempOutput;
      }
    }
  }
  return output;
};

//! This was chatGPT solution. Basically you go from each end to try to maximize the height and the width

function maxAreaGPT(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
