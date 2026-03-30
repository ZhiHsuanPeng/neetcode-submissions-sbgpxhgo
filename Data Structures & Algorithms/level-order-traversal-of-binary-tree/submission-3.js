/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {  

        if (!root) return []
        let q = [root]  
        let store = {}
        let level = 1
        while(q.length) {
            const size = q.length  
            for (let i = 0; i < size; i ++) {
                const node = q.shift() 
                if (!store[level]) {
                    store[level] = []
                } 

                store[level].push(node.val) 

                if (node.left) q.push(node.left) 
                if (node.right) q.push(node.right) 
            } 
            level ++
        } 

        return Object.values(store)
    }
}
