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
        let m = new Map();
        m.set(null, null);

        let cur = head;
        while(cur) {
            m.set(cur, new Node(cur.val))
            cur = cur.next
        }

        cur = head;

        while(cur){
            let copy = m.get(cur)
            copy.next = m.get(cur.next)
            copy.random = m.get(cur.random)
            cur = cur.next
        }

        return m.get(head)
    }
}
