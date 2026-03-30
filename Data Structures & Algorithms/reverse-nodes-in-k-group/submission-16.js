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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) { 
        let dummy = new ListNode(0, head) 
        let groupPrev = dummy

        while(true) {

            let kth = this.getKth(groupPrev, k)  

            if (!kth) {
                break
            } 

            let groupNext = kth.next 
            let curr = groupPrev.next 

            let prev = groupNext
            while(curr !== groupNext) {
                let next = curr.next 
                curr.next = prev 
                prev = curr 
                curr = next
            } 

            let next = groupPrev.next 
            groupPrev.next = prev  
            groupPrev = next
        } 

        return dummy.next

    } 

    getKth(curr, k) {
        while(k > 0 && curr) {
            curr = curr.next 
            k --
        } 

        return curr
    }
}
