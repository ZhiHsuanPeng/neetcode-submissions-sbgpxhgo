class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        adj = defaultdict(list) 

        for u, v in tickets: 
            adj[u].append(v) 

        for key in adj: 
            adj[key].sort(reverse = True) 

        res = [] 
        def dfs(cur): 
            while adj[cur]: 
                next = adj[cur].pop() 
                dfs(next) 

            res.append(cur)  
        
        dfs('JFK')

        return res[::-1]