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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) { 
        const result = [0]
        this.dfs(root, subRoot, result) 

        return result[0] === 1
    }  

    dfs(n1, n2, result) { 
        if (!n1) return;
        if (n1.val === n2.val) {
            if (this.isTheSame(n1, n2)) result[0] = 1 
        } 

        this.dfs(n1.left, n2, result) 
        this.dfs(n1.right, n2, result)
    }

    isTheSame(n1, n2) {
        if (!n1 && !n2) return true 

        if ((!n1 && n2) || (n1 && !n2)) return false 

        if (n1.val !== n2.val) return false 

        const left = this.isTheSame(n1.left, n2.left) 
        const right = this.isTheSame(n1.right, n2.right) 

        return left && right
    }
}
