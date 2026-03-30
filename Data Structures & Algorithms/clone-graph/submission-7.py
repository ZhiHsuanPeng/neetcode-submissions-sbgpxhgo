"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:  
        if not node: 
            return None 
        return self.dfs(node, {})
       
    def dfs(self, node, visited): 
        if node in visited: 
            return visited.get(node) 

        newNode = Node(node.val) 
        visited[node] = newNode 

        for nei in node.neighbors: 
            newNode.neighbors.append(self.dfs(nei, visited)) 

        return newNode