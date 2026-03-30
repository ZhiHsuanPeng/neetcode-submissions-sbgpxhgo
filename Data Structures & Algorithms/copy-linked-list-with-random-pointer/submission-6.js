// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) { 
        if (!head) return null
        let curr = head 

        let map = new Map() 

        while(curr) {
            map.set(curr, new Node(curr.val)) 
            curr = curr.next
        } 

        curr = head 

        while(curr) {
            map.get(curr).next = map.get(curr.next) || null 
            map.get(curr).random = map.get(curr.random) || null 

            curr = curr.next 
        }

        return map.get(head)
    }
}
