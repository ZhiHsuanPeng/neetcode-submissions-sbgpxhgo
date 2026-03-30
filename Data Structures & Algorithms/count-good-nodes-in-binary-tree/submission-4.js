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
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0 
        const max = root.val

        return this.dfs(root, max) 
    }  

    dfs(node, max) {
        if (!node) return 0

        let count = 0
        if (node.val >= max) {
            count ++
            max = node.val
        } 

        const l = this.dfs(node.left, max) 
        const r = this.dfs(node.right, max) 

        return count + l + r
    }
}
