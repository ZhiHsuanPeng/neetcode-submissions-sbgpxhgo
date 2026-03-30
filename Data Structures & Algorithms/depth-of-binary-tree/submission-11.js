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
        return this.dfs(root)
    } 

    dfs(root) {
        if (!root) return 0 
        const l = this.dfs(root.left) 
        const r = this.dfs(root.right) 

        return 1 + Math.max(l , r)
    }
}
