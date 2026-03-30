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
        return this.dfs(root, -Infinity)
    } 
     
    dfs(node, max) {
        if (!node) return 0 

        const count = node.val >= max ? 1 : 0
        const curMax = Math.max(max, node.val)

        const l = this.dfs(node.left, curMax) 
        const r = this.dfs(node.right, curMax)
        return count + l + r
    }
}
