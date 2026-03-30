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

        let nodes = [] 

        while(head) {
            nodes.push(head) 
            head = head.next
        } 

        for (let i = 0;  i + k <= nodes.length; i = i + k) {
            let l = i 
            let r = i + k - 1 
            while(l < r) {
                [nodes[l], nodes[r]] = [nodes[r], nodes[l]]  
                l ++ 
                r --
            }
           
        } 

         for (let i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i + 1];
        }
        nodes[nodes.length - 1].next = null;

        // Step 4: Return new head
        return nodes[0];
    }
}
