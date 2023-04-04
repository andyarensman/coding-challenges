/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

//! Don't understand this one either

/* 

Approach
The reverseList function takes a head parameter representing the head of the linked list.
The first thing the function does is check if the linked list is empty or has only one node. If it does, the function simply returns the head node, since a list with only one node is already reversed.
If the linked list has more than one node, the function calls itself recursively with the next node as the new head. This recursively reverses the rest of the list.
The reversedList variable now contains the reversed list from the next node to the end of the list.
The function now sets the next node's next pointer to the current node, effectively reversing the current node's next pointer.
Finally, the function sets the current node's next pointer to null to break the link with the next node and return the new head node, which is the last node of the original linked list.
Complexity
The time complexity of the reverseList function is O(n), where n is the number of nodes in the linked list. This is because the function iterates through each node in the list exactly once, performing a constant amount of work on each node.

Space complexity:
The space complexity of the function is O(1), because it only uses a constant amount of additional space to keep track of the current, previous, and next nodes as it iterates through the list. This means that the space used by the function does not depend on the size of the input, and is therefore constant.
Code
*/

var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;
  
  while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  
  return prev;
};