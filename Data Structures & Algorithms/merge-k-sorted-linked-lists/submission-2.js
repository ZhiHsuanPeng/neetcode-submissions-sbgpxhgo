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
            return null;
        }
        while(lists.length > 1){
            let mergedLists = []
            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;
                mergedLists.push(this.merge(l1, l2))
            }

            lists = mergedLists
            }
        return lists[0]
    }

    merge(l1, l2) {
        let dummy = new ListNode();
        let current = dummy;

        while(l1 && l2) {
            if (l1.val > l2.val) {
                current.next = l2;
                l2 = l2.next
            } else {
                current.next = l1;
                l1 = l1.next
            }
            current = current.next
        }

        current.next = l1 || l2;

        return dummy.next
    }
}
