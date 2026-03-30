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
            let kth = this.getK(groupPrev, k) 

            if (!kth) {
                break
            } 

            let groupNext = kth.next 
            let start = groupPrev.next 
            let prev = groupNext 

            while(start !== groupNext) {
                let temp = start.next
                start.next = prev 
                prev = start 
                start = temp
            } 

            let temp = groupPrev.next  
            groupPrev.next = prev 
            groupPrev = temp
        } 

        return dummy.next
    } 

    getK(node, k) {
        while(k > 0 && node) {
            node = node.next 
            k --
        } 

        return node
    }
}
