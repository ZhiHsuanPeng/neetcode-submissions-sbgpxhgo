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
      function findPath(root, target) {
        const stack = [[root, [root]]];

        while (stack.length) {
            const [node, path] = stack.pop();
            if (!node) continue;

            if (node.val === target.val) return path;

            if (node.right) stack.push([node.right, [...path, node.right]]);
            if (node.left) stack.push([node.left, [...path, node.left]]);
        }

        return [];
    }

    const path1 = findPath(root, p);
    const path2 = findPath(root, q);

    let i = 0;
    while (i < path1.length && i < path2.length && path1[i] === path2[i]) {
        i++;
    }

    return path1[i - 1];
    } 

}
