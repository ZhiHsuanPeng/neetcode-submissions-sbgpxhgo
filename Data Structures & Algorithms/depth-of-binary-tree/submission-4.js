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
    maxDepth(root) { 

      if (!root) return 0

      const q = [{ node: root, depth: 1 }] 
      let max = 0 

      while(q.length) {
        const { node, depth } = q.pop() 

        max = Math.max(depth, max) 

        if (node.left) q.push({node: node.left, depth: depth + 1}) 
        if (node.right) q.push({node: node.right, depth: depth + 1})
      } 

      return max
    }
}
