/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) { 

        let d = new ListNode(0)  
        let start = d

        let carry  = 0
        while(l1 || l2 || carry > 0) {
            let v1 = l1 ? l1.val : 0  
            let v2 = l2 ? l2.val : 0 
            let sum = v1 + v2 + carry 
            let val = sum % 10 
            carry = Math.floor(sum / 10) 

            start.next = new ListNode(val) 
            start = start.next 

            if (l1) l1 = l1.next 
            if (l2) l2 = l2.next
        }  

        return d.next
    }
}
