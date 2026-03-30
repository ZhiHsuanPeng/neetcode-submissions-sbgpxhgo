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
        if (!lists || lists.length === 0) {
            return null
        } 

        return this.rec(lists, 0, lists.length - 1)
    } 

    rec(lists, l , r) {
        if (l > r) {
            return null
        } 

        if (l === r) {
            return lists[l]
        } 

        const mid = Math.floor((r + l) / 2) 
        const left = this.rec(lists, l, mid) 
        const right = this.rec(lists, mid + 1, r) 
         
        return this.merge(left, right)
    } 

    merge(l1, l2) {
        let dummy = new ListNode(0) 
        let start = dummy 

        while(l1 && l2) {
            if (l1.val >= l2.val) {
                start.next = l2 
                l2 = l2.next
            } else {
                start.next = l1 
                l1 = l1.next
            } 

            start = start.next
        } 

        start.next = l1 ? l1 : l2 

        return dummy.next
    }
}
