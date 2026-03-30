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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) { 
        const path1 = this.findPath(root, p) 
        const path2 = this.findPath(root, q) 

        let res = 0
        while(res < path1.length && res < path2.length && path1[res] === path2[res]) {
            res ++
        } 

        return path1[res - 1];
   
    }  

    findPath(root, target) { 
        const stack = [[root, [root]]] 
        while(stack.length) {
            const [node, path] = stack.pop()  
            if (!node) continue;
            if (node.val === target.val) return path 

            if (node.left) stack.push([node.left, [...path, node.left]]) 
            if (node.right) stack.push([node.right, [...path, node.right]])
        } 

        return []

    }

}
