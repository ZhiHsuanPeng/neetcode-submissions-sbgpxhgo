class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool: 
        if len(edges) != n - 1:
            return False

        parent = [ i for i in range(n) ] 
        rank = [1] * n
        
        def find(node): 
            if parent[node] != node: 
                parent[node] = find(parent[node]) 
            return parent[node] 

        def union(u, v): 

            p1 = find(u) 
            p2 = find(v) 

            if p1 == p2: 
                return False 

            if rank[p1] > rank[p2]: 
                parent[p2] = p1 
                rank[p1] += rank[p2] 
            else: 
                parent[p1] = p2 
                rank[p2] += rank[p1] 

            return True 

        for u, v in edges: 
            if not union(u, v): 
                return False 

        return True 

