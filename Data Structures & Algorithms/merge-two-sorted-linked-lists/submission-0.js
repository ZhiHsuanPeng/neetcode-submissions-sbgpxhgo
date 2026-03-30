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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let result = new ListNode(0, null);
        let dummy = result
        while(list1 && list2) {
            if (list1.val > list2.val) {
                result.next = list2;
                list2 = list2.next
            } else {
                result.next = list1;
                list1 = list1.next
            }
            result = result.next
        }

        if(list1) {
            result.next = list1
        }

        if(list2) {
            result.next = list2
        }

        return dummy.next
    }
}
