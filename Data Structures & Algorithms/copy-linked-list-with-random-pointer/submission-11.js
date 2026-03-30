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
    constructor() {
        this.map = new Map()
    }
    copyRandomList(head) {   
       if (!head) return null
       let node = head 
       
       while(node) {
        this.map.set(node, new Node(node.val)) 
        node = node.next
       } 


       node = head 

       while(node) {
        let copy = this.map.get(node) 
        copy.next = this.map.get(node.next) || null 
        copy.random = this.map.get(node.random) || null 
        node = node.next
       } 

       return this.map.get(head)

    } 

    
}
