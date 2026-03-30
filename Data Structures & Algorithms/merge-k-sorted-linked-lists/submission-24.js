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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) { 
        if (lists.length === 0) return null;
        return this.rec(lists, 0, lists.length - 1)
    } 


    rec(lists, l, r) { 
        if (l === r) {
            return lists[l]
        }

        let mid = Math.floor((r + l) / 2) 
        let left = this.rec(lists, l, mid) 
        let right = this.rec(lists, mid + 1, r) 
        return this.merge(left, right)
    }


    merge(l1, l2) {
        let dummy = new ListNode()  
        let node = dummy

        while(l1 && l2) {
            if (l1.val > l2.val) {
                node.next = l2 
                l2 = l2.next
            } else {
                node.next = l1 
                l1 = l1.next
            } 

            node = node.next
        } 

        node.next = l1 ? l1 : l2 

        return dummy.next
    }
}
