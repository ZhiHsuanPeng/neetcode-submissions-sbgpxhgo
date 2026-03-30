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
        if (!lists || lists.length === 0) return null;
         for (let i = 0; i < lists.length; i++) {
            lists[i] = this.mergeTwoLists(lists[i], lists[i - 1]);
        }
        return lists[lists.length - 1];
    } 

    mergeTwoLists(list1, list2) {
        let dummy = new ListNode() 
        let pointer = dummy 

        while(list1 && list2) {
            if (list1.val > list2.val) {
                pointer.next = list2 
                list2 = list2.next
            } else {
                pointer.next = list1 
                list1 = list1.next
            } 

            pointer = pointer.next
        } 

        if (list1) {
            pointer.next = list1
        } 

        if (list2) {
            pointer.next = list2
        } 

        return dummy.next
    }
}
