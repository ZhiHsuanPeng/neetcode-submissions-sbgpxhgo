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
        // connect the copy 
        let node = head 
        while(node) {
            const copy = new Node(node.val) 
            let temp = node.next 
            node.next = copy 
            copy.next = temp 
            node = temp
        } 

        // assign random  
        node = head 
        while(node) {
            const copy = node.next 
            const random = node.random 
            const randomCopy = random ? random.next : null 

            copy.random = randomCopy 
            node = node.next.next
        } 

        let dummy = new Node(0) 
        let tail = dummy 
        node = head
        // restructure the list 
        while(node) {
            const copy = node.next 
            tail.next = copy 
            tail = tail.next 
            node.next = copy.next; // restore original list
            node = node.next;
        } 

        return dummy.next
    }
}
