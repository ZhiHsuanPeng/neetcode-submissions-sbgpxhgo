class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) + 1 != n:
            return False 

        parent = [ i for i in range(n) ] 
        size = [1] * n 

        def find(u): 
            if parent[u] != u: 
                parent[u] = find(parent[u]) 
            
            return parent[u] 

        def join(u, v): 
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
            if not join(u, v): 
                return False 

        return True