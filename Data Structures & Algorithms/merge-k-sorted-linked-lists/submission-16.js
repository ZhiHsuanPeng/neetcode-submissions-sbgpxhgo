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
        if (lists.length === 0 || !lists) return null

        while(lists.length > 1) {
            let merged = [] 
            for (let i = 0; i < lists.length; i = i + 2) {
                let l1 = lists[i] 
                let l2 = i + 1 < lists.length ? lists[i + 1] : null 
                merged.push(this.mergeTwoLists(l1, l2)) 
            } 

            lists = merged
        } 

        return lists[0]
    }

    mergeTwoLists(l1, l2) {
        
       let dummy = new ListNode() 
       let pointer = dummy     

        while(l1 && l2) {
            if (l1.val > l2.val) {
                pointer.next = l2 
                l2 = l2.next
            } else {
                pointer.next = l1 
                l1 = l1.next
            } 

            pointer = pointer.next
        } 

        if (l1) {
            pointer.next = l1
        } 

        if (l2) {
            pointer.next = l2
        } 

        return dummy.next
    }
}
