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
        if (!root || root.length < 1) return [] 

        const result = [] 
        this.dfs(root, 0, result) 

        return result
    } 

    dfs(node, level ,res) {
        if (!node) return 

        if (!res[level]) {
            res[level] = []
        } 

        res[level].push(node.val)

        this.dfs(node.left, level + 1, res) 
        this.dfs(node.right, level + 1, res)
    }
}
