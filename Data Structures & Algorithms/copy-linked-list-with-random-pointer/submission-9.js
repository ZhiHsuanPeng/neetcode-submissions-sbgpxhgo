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

        this.map.set(head, new Node(head.val))
        let copy = this.map.get(head) 
        copy.next = this.copyRandomList(head.next) 
        copy.random = this.map.get(head.random) || null 

        return copy

    } 

    
}
