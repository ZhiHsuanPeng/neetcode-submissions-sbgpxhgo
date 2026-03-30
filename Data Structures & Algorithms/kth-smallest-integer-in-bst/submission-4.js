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
        if (!root) return null 

        const arr = [k] 
        this.dfs(root, arr) 
        return arr[1]
    } 

    dfs(node, arr) {
        if (!node) return 

        this.dfs(node.left, arr) 
         
        arr[0]-- 
        if (arr[0] === 0) {
            arr[1] = node.val 
            return
        }  

    
        this.dfs(node.right, arr)
    }
}
