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

        return this.dfs(root)[0] === 1 ? true : false
    } 

    dfs(node) {
        if (!node) return [1, 0] 

        const l = this.dfs(node.left) 
        const r = this.dfs(node.right)  
        
        let isBalanced = false

        if(l[0] === 1 && r[0] === 1 && Math.abs(l[1] - r[1]) <= 1) {
            isBalanced = true
        } 

        return [isBalanced === true ? 1 : 0, 1 + Math.max(l[1], r[1])]
    }
}
