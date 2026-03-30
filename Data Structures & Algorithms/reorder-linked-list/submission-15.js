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
        // traverse the list, find the second half 
        let dummy = new ListNode(0, head) 
        let slow = dummy 
        let fast = dummy 

        while(fast && fast.next)  {
            slow = slow.next 
            fast = fast.next.next
        } 

        let second = slow.next 
        slow.next = null 

        // reverse the second half of the list  
        let prev = null 

        while(second) {
            let temp = second.next 
            second.next = prev 
            prev = second 
            second = temp
        } 

        // start weaving the first and the second list 
        second = prev 
        let first = head 

        while(second) {
            let temp1 = first.next 
            let temp2 = second.next 

            first.next = second 
            second.next = temp1 

            first = temp1 
            second = temp2
        }
    }
}
