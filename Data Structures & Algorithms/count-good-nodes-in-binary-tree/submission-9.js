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
        const result = [0] 
        this.dfs(root, root.val, result) 
        return result[0]
    } 

    dfs(node, curMax, res) {
        if (!node) return 

        if (node.val >= curMax) {
            res[0] ++ 
            curMax = node.val
        } 

        this.dfs(node.left, curMax, res) 
        this.dfs(node.right, curMax, res) 
    }
}
