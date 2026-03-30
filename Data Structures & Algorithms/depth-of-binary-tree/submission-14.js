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
    maxDepth(root) { 
        if (!root) return 0
        return this.dfs(root)
    } 

    dfs(node) {
        if (!node) return 0 
        let left = this.dfs(node.left) 
        let right = this.dfs(node.right) 

        return 1 +  Math.max(left, right)
    }
}
