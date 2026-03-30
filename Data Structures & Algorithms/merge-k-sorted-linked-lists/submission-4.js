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
        let arr = [] 
        for (let list of lists) {
            while(list) {
                arr.push(list) 
                list = list.next
            }
        } 
        arr.sort((a, b) => a.val - b.val) 

        for (let i = 0; i < arr.length; i ++) {
            let node = arr[i] 
            if (i === arr.length - 1) {
                node.next = null
            } else {
                node.next = arr[i + 1]
            }
        } 

        return arr.length === 0 ? null : arr[0]
    }
}
