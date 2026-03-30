class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        parent = [ i for i in range(n) ] 
        size = [1] * n 

        def find(u): 
            if parent[u] != u: 
                parent[u] = find(parent[u]) 
            return parent[u] 

        def union(u, v): 

            p1, p2 = find(u), find(v) 

            if p1 == p2: 
                return False 

            if size[p1] > size[p2]: 
                parent[p2] = p1 
                size[p1] += size[p2]  
            else: 
                parent[p1] = p2 
                size[p2] += size[p1] 

            return True 

        res = n
        for u, v in edges: 
            if union(u, v): 
                res -= 1 

        return res