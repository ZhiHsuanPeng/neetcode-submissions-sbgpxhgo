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
            const copy = new Node(node.val) 
            map.set(node, copy) 
            node = node.next
        } 

        node = head 
        while(node) { 
            let copy = map.get(node) 
            let next = node.next 
            let random = node.random 

            copy.next = map.get(next) || null 
            copy.random = map.get(random) || null
            node = node.next
        } 

        return map.get(head)
    }
}
