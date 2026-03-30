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
        let map = new Map() 

        let node = head 
        while(node) {
            map.set(node, new Node(node.val)) 
            node = node.next
        } 

        node = head 
        while(node) {
            let copy = map.get(node) 

            copy.next = map.get(node.next) || null 
            copy.random = map.get(node.random) || null 

            node = node.next
        } 

        return map.get(head)
    }
}
