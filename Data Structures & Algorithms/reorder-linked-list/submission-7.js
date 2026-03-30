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
     * @return {void}
     */
    reorderList(head) { 
        let fast = head.next 
        let slow = head 

        while(fast !== null && fast.next !== null) {
            fast = fast.next.next 
            slow = slow.next 
        } 

        let second = slow.next 
        let prev = null 
        slow.next = null 

        while(second) {
            let temp = second.next 
            second.next = prev 
            prev = second 
            second = temp
        } 

        let first = head 
        second = prev 

        while (second !== null) {
           const temp1 = first.next 
           const temp2 = second.next 

           first.next = second 
           second.next = temp1 

           first = temp1 
           second = temp2
        }

    }

}
