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

        let node = head
        while(node) {
            let copy = new Node(node.val) 
            copy.next = node.next 
            node.next = copy 
            node = copy.next        
        } 

        node = head 
        while(node) { 
            let copy = node.next
            if (node.random) {
                copy.random = node.random.next
            }  
            node = node.next.next
        } 

        let d = new Node(0) 
        let tail = d 

        node = head 
        while(node) {
            let copy = node.next  
            node.next = copy.next
            tail.next = copy 
            tail = tail.next 
            node = node.next
        } 

        return d.next
    }
}
