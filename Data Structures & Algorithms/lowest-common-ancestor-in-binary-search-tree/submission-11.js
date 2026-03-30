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

        const p1 = this.findPath(root, p) 
        const p2 = this.findPath(root, q) 

        let i = 0 

        while(p1[i] && p2[i] && p1[i].val === p2[i].val) {
            i ++
        } 

        return p1[i - 1]
    } 

    findPath(node, target) {
        const stack = [[node, [node]]] 
         
        while(stack.length) {
            const [node, path] = stack.pop() 

            if (node.val === target.val) {
                return path
            } 

            if (node.left) stack.push([node.left, [...path, node.left]]) 
            if (node.right) stack.push([node.right, [...path, node.right]])
        } 

        return []
    }
}
