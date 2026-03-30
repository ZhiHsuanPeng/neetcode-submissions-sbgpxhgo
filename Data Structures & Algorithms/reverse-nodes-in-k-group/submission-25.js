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
        let d = new ListNode(0, head) 
        let groupPrev = d 

        while(true) {
            let kth = this.getKth(groupPrev, k) 

            if (!kth) {
                break
            }

            let groupNext = kth.next 
            let curr = groupPrev.next 
            let prev = groupNext
            while(curr !== groupNext) {
                let temp = curr.next 

                curr.next = prev 
                prev = curr 
                curr = temp
            }  

            let next = groupPrev.next 
            groupPrev.next = kth 
            groupPrev = next
        }  

        return d.next
    } 

    getKth(curr, k) { 

        while(curr && k > 0) {
            curr = curr.next 
            k --
        } 

        return curr
    }
}
