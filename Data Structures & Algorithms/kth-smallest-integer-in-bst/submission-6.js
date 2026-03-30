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

        const temp = [k] 
        this.dfs(root, temp) 

        return temp[1]
    } 

    dfs(node, temp) {
       if (!node) return 

       this.dfs(node.left, temp) 
        if (temp[1]) return
       temp[0]-- 

       if (temp[0] === 0) {
        temp[1] = node.val
       } 

       this.dfs(node.right, temp)
    }
}
