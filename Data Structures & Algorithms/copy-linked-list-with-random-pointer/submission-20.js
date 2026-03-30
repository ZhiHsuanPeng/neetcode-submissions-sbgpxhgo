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

        // first pass -> copy the node and its value  
        let node = head 
        while(node) {
            map.set(node, new Node(node.val)) 
            node = node.next
        } 


        // second pass -> copy the next pointer and random pointer
        node = head 
        while(node) {
              const copyNode = map.get(node)
            copyNode.next = map.get(node.next) || null
            copyNode.random = map.get(node.random) || null
            node = node.next
        } 

        return map.get(head)
    }
}
