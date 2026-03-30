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
        if (!root) return false
        if (this.isTheSame(root, subRoot)) {
            return true
        } 

        return ( this.isSubtree(root.left, subRoot) || (this.isSubtree(root.right, subRoot)))
    } 

    isTheSame(n1, n2)  {
        if (!n1 && !n2) return true 
        if (!n1 || !n2) return false 
        if (n1.val !== n2.val) return false 

        return ( this.isTheSame(n1.left, n2.left) && this.isTheSame(n1.right, n2.right))
    }
}
