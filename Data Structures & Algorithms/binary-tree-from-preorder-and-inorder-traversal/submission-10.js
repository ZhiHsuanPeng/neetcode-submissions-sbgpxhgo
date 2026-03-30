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

        let pre_idx = 0  
        let indices = new Map() 
        inorder.forEach((value, index) => {
            indices.set(value, index)
        }) 

        function dfs(l, r) {
            if (l > r) return null
            let root_value = preorder[pre_idx] 
            let root = new TreeNode(root_value)  
            pre_idx ++ 

            let mid = indices.get(root_value) 
            root.left = dfs(l, mid - 1) 
            root.right = dfs(mid + 1, r)

            return root
        } 

        return dfs(0, inorder.length - 1) 
    }
}
