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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) { 
        const count = [k] 
        this.dfs(root, count) 

        return count[1] 

    } 

    dfs(node, count) {
        if (!node) return 

        this.dfs(node.left, count) 

        count[0] -- 
        if (count[0] === 0) {
            count[1] = node.val 
            return
        } 

        this.dfs(node.right, count)
    } 
}
