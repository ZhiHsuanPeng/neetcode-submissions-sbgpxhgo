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
     * @return {number[]}
     */
    rightSideView(root) { 
        if (!root) return []  
        const res = []  
        this.dfs(root, 0, res) 
        return res
    } 

    dfs(node, level, res) {
        if (!node) return null 

        if (!res[level]) {
            res[level] = node.val
        } 

        this.dfs(node.right, level + 1, res) 
        this.dfs(node.left, level + 1, res)
    }
}
