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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) { 
        const res = [] 
        this.dfs1(root, res) 
        return res.join(',')
    } 

    dfs1(node, res) {
        if (!node) {
            res.push('N') 
            return
        } 

        res.push(node.val) 
        this.dfs1(node.left, res) 
        this.dfs1(node.right, res)
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) { 
        const arr = data.split(',') 
        return this.dfs2(arr, [0])
    } 

    dfs2(data, index) {
        const idx = index[0]  
        index[0]++   
        if (data[idx] === 'N') return null 
        const node = new TreeNode(Number(data[idx])) 
        node.left = this.dfs2(data, index) 
        node.right = this.dfs2(data, index) 

        return node
    }
}
