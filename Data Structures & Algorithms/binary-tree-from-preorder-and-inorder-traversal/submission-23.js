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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) { 
        let indices = new Map() 
        inorder.forEach((val, index) => { 
            indices.set(val, index)
        }) 

        let pre_idx = 0 

        const dfs = (l, r) => {
            if (l > r) return null 
            let root_val = preorder[pre_idx]  
            pre_idx ++
            let root = new TreeNode(root_val)  
            let mid_point = indices.get(root_val) 
            root.left = dfs(l, mid_point - 1) 
            root.right = dfs(mid_point + 1, r) 

            return root
        } 

        return dfs(0, inorder.length - 1)
    }
}
