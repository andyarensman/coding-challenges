/* 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

//! Couldn't get a solution, didn't know linked lists was a thing. doesn't seem common in JS.

//!Someone else's solution:

/*
Approach
Create a new node called tempNode and set its value to 0 and its next pointer to null.
Set currentNode to tempNode.
While l1 and l2 are not null, compare the values of the nodes pointed to by l1 and l2. Add the smaller value node to currentNode and move the corresponding pointer to its next node.
Set the next pointer of currentNode to the remaining nodes of l1 or l2.
Return the merged list starting from the next node of tempNode, which is tempNode.next.
Complexity
The time complexity of the iterative approach is O(m + n), where m and n are the lengths of l1 and l2, respectively. This is because we iterate over both lists once and compare each node at most once.

The space complexity of the iterative approach is O(1), since we only create a constant number of new nodes (tempNode and currentNode) and modify the pointers of the input lists in place. Therefore, the space required is constant and does not depend on the length of the input lists.

Code
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;
  
  while (l1 && l2) {
      if(l1.val < l2.val) {
          currentNode.next = l1;
          l1 = l1.next
      } else {
          currentNode.next = l2;
          l2 = l2.next
      }
      currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;
  
  return tempNode.next;
};