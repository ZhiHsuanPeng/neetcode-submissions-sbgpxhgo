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

        if (!root) return false 
        return this.dfs(root, -Infinity, Infinity)
    } 

    dfs(node, left, right) {
        if (!node) return true

        if (!(left < node.val && node.val < right)) {
            return false
        } 

        let l = this.dfs(node.left, left, node.val) 
        let r = this.dfs(node.right, node.val, right) 

        return l && r
    }
}
