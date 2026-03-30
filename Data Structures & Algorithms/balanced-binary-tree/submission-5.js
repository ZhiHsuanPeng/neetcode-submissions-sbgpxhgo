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
        return this.dfs(root)[0] === 1
    } 

    dfs(node) {
        if (!node) return [1, 0] 

        const l = this.dfs(node.left) 
        const r = this.dfs(node.right) 

        const isBalanced = l[0] === 1 && r[0] === 1 && Math.abs(l[1] - r[1]) <= 1 

        return [ isBalanced ? 1 : 0, 1 + Math.max(r[1], l[1])]
    }
}
