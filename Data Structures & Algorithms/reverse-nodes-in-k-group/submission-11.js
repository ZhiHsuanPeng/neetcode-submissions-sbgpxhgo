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

        let arr = [] 

        while(head) {
            arr.push(head)
            head = head.next 
        } 

        for (let i = 0; i + k <= arr.length; i = i + k) {
            let l = i 
            let r = i + k - 1 

            while(l < r) {
                [arr[l], arr[r]] = [arr[r], arr[l]] 
                l ++ 
                r --
            }
        } 

        for (let i = 0; i < arr.length; i ++) {
            arr[i].next = arr[i + 1]
        } 

        arr[arr.length - 1].next = null

        return arr[0]
    }
}
