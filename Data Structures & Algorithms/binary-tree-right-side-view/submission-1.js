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
        this.rdfs(root, res, 0) 

        return res
    } 

    rdfs(node, res, level) {
        if (!node) return 

        if (res.length === level) {
            res.push(node.val)
        } 

        this.rdfs(node.right, res, level + 1) 
        this.rdfs(node.left, res, level + 1)
    }
}
