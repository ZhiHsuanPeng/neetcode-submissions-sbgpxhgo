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
        const result = [] 
        this.dfs1(root, result) 

        return result.join(',')
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
        data = data.split(',') 

        return this.dfs2(data,[0])
    } 

    dfs2(data, index) {
        let nodeVal = data[index[0]] 
         index[0] ++
        if (nodeVal === 'N') { 
            return null
        } 

      
        let node = new TreeNode(Number(nodeVal)) 
        node.left = this.dfs2(data,  index) 
        node.right = this.dfs2(data,  index) 

        return node
    }
}
