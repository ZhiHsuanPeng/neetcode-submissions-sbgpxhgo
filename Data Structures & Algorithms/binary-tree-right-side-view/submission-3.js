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
     * @return {number[]}
     */
    rightSideView(root) {   

        if (!root) return []
        const res = [] 
        const q = [root]  
        let level = 0

        while(q.length) { 

            const rowLen = q.length
            for (let i = 0; i < rowLen; i ++) {
                const node = q.shift()   

                if (res.length === level) {
                    res.push(node.val)
                }    

                if (node.right) q.push(node.right) 
                if (node.left) q.push(node.left)           
            } 

            level ++
        } 

        return res
    } 

}
