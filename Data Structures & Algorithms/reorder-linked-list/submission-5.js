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
       let array = []

       while(head) {
        array.push(head) 
        head = head.next
       }  

       let l = 0 
       let r = array.length - 1 

       while(l < r) { 
        array[l].next = array[r] 
        l ++ 
            if (l < r) {
                array[r].next = array[l] 
                r--
            }
       }    

       array[l].next = null   
    }

}
