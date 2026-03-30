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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) { 

        return this.dfs(p, q)
    } 


    dfs(n1, n2) {
        if (!n1 && !n2) return true 

        if ((!n1 && n2) || (n1 && !n2)) return false 

        if (n1.val !== n2.val) return false 

        const l = this.dfs(n1.left, n2.left) 
        const r = this.dfs(n1.right, n2.right) 

        return l && r
    }
}
