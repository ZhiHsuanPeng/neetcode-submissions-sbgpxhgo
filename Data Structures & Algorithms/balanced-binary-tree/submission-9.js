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
    isBalanced(root) { 
        if (!root) return true 

        let res = [true] 
        this.dfs(root, res) 

        return res[0]
    } 

    dfs(node, res) {
        if (!node) return 0 

        let left = this.dfs(node.left, res)
        let right = this.dfs(node.right, res)  

        if (Math.abs(left - right) > 1) {
            res[0] = false 
            return
        } 

        return 1 + Math.max(left, right)
    }
}
