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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
     isSameTree(p, q) { 

        const stack = [[p, q]] 
         

         while(stack.length) {
            const [n1, n2] = stack.pop() 

            if (!n1 && !n2) continue 

            if (!n1 || !n2 || n1.val !== n2.val) return false 

            stack.push([n1.left, n2.left]) 
            stack.push([n1.right, n2.right])
         } 

         return true
    } 
}
