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
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0 
        const result = [0] 
        const max = root.val

        this.dfs(root, max, result) 

        return result[0]
    }  

    dfs(node, max, res) {
        if (!node) return 

        if (node.val >= max) {
            res[0] ++ 
            max = node.val
        } 

        this.dfs(node.left, max, res) 
        this.dfs(node.right, max, res)
    }
}
