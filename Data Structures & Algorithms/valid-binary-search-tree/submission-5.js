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
     * @return {boolean}
     */
    isValidBST(root) { 
        if (!root) return null 

        const result = [true] 
        this.dfs(root, [-Infinity, Infinity], result) 

        return result[0]
    } 

    dfs(node, range, res) {
        if (!node) return true

        if (!(range[0] < node.val && node.val < range[1])) {
            res[0] = false
        } 

        this.dfs(node.left, [range[0], node.val], res) 
        this.dfs(node.right, [node.val, range[1]], res)
    }
}
