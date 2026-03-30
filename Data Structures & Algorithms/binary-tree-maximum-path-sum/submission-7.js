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
    maxPathSum(root) { 
        if (!root) return 0 

        const result = [-Infinity] 
        this.dfs(root, result) 

        return result[0]
    } 

    dfs(node, res) {
        if (!node) return 0 

        let left = Math.max(this.dfs(node.left, res), 0) 
        let right = Math.max(this.dfs(node.right, res), 0) 
        res[0] = Math.max(node.val + left + right, res[0]) 

        return node.val + Math.max(left, right)
    }
}
