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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) { 
        let dummy = new ListNode(0, head)
        let l = dummy 
        let r = dummy  

        while(n >= 0) {
            r = r.next 
            n --
        } 

        while(r) {
            r = r.next 
            l = l.next
        } 

        l.next = l.next.next 

        return dummy.next
    }
}
