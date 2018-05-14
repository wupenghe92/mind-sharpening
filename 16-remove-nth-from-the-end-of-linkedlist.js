//https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let current = head;
  for (let i=0; i<n-1; i++) {
    current = current.next;
  }
  if (!current.next) return head.next;
  current = current.next;
  let remove = head;
  while (current.next) {
    remove = remove.next;
    current = current.next;
  }
  remove.next = remove.next.next;
  return head;
};


//best solution
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head
    let fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    let slow = dummy;
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
