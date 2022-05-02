/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead, current1 = l1, current2 = l2;
    let carry = 0;
    while(current1 !== null || current2 !==null) {
      let val1 = current1 ? current1.val : 0
      let val2 = current2 ? current2.val : 0      
      let sum = val1 + val2 + carry;
      carry = sum >= 10 ? 1 : 0
      let node = new ListNode(sum%10);
      current.next = node;
      current = node;
      if (current1) current1 = current1.next;
      if (current2) current2 = current2.next;
    }
    if (carry!==0) {
        let node = new ListNode(carry);
        current.next = node;
    }
    return dummyHead.next;
}; 