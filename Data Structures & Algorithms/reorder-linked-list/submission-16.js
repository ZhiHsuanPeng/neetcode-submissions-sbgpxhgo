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
        let dummy = new ListNode() 
        dummy.next = head 

        let fast = dummy 
        let slow = dummy 
        while(fast && fast.next) {
            fast = fast.next.next 
            slow = slow.next
        }  

        let second = slow.next 
        slow.next = null 
        let prev = null 

        while(second) {
            let temp = second.next 
            second.next = prev 
            prev = second 
            second = temp
        } 

        let first = dummy.next
        second = prev 
         
        while(second) { 
            let temp1 = first.next 
            let temp2 = second.next 

            first.next = second 
            second.next = temp1 
            first = temp1 
            second = temp2
        } 

        return dummy.next
    }
}
