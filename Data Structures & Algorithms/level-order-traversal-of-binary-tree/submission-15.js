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

        const q = [root] 
        const result = [] 

        while(q.length) {
            const num = q.length 
            let level = []
            for (let i = 0; i < num; i ++) {
                const node = q.shift() 
                level.push(node.val) 
                if (node.left) q.push(node.left) 
                if (node.right) q.push(node.right)
            }  

            if (level.length) {
                result.push(level)
            }
        } 

        return result
    } 
}
