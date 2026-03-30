/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {   
        if (!node) return null
        let visited = new Map()
        return this.dfs(node, visited)
    } 

    dfs(node, visited) { 
        if (visited.has(node)) {
            return visited.get(node)
        } 

        let newNode = new Node(node.val) 
        visited.set(node, newNode) 

        for (const nei of node.neighbors) {
            newNode.neighbors.push(this.dfs(nei, visited))
        } 

        return newNode
    }
}
