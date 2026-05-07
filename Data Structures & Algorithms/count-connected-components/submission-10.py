class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        parents = [ i for i in range(n) ] 
        size = [1] * n 

        def find(n): 
            if parents[n] != n: 
                parents[n] = find(parents[n]) 

            return parents[n] 

        def union(n1, n2):
            p1 = find(n1) 
            p2 = find(n2) 

            if p1 == p2: 
                return False 

            if size[p1] > size[p2]: 
                parents[p2] = p1 
                size[p1] += size[p2] 
            else: 
                parents[p1] = p2 
                size[p2] += size[p1] 

            return True 

        cnt = n
        for u, v in edges: 
            if union(u, v):
                cnt -= 1 

        return cnt