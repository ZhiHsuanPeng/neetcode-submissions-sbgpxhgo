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
     * @return {number[][]}
     */
    levelOrder(root) { 
        const res = [] 

        this.dfs(root, 0, res) 

        return res
    } 

    dfs(node, level, res) {
        if (!node) return 

        if (!res[level]) {
            res[level] = []
        } 

        res[level].push(node.val) 

        if (node.left) this.dfs(node.left, level + 1, res) 
        if (node.right) this.dfs(node.right, level + 1, res)
    }
}
