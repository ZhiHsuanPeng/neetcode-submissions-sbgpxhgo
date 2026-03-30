class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        parent = [ i for i in range(n + 1) ] 
        size = [1] * (n + 1)

        def find(u): 
            if parent[u] != u:
                parent[u] = find(parent[u]) 

            return parent[u] 

        def union(u, v): 
            p1 = find(u) 
            p2 = find(v) 

            if p1 == p2: 
                return False 

            if size[p1] > size[p2]: 
                parent[p2] = p1 
                size[p1] += size[p2] 
            else: 
                parent[p1] = p2 
                size[p2] += size[p1]  

            return True

        for u, v in edges: 
            if not union(u, v): 
                return [u, v]