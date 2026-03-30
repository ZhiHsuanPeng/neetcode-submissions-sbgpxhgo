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

        let nodes = [] 
        while(head) {
            nodes.push(head) 
            head = head.next
        } 

        let l = 0 
        let r = nodes.length - 1 

        while(l < r) {
            nodes[l].next = nodes[r]  
            l ++ 

            if (l < r) {
                nodes[r].next = nodes[l] 
                r --
            }
        } 

        nodes[l].next = null 

        return nodes[0]
    }
}
