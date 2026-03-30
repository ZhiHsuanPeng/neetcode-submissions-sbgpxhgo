class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:     
        graph = defaultdict(list) 
        for u, v in sorted(tickets): 
            graph[u].append(v) 

        res = [] 

        def dfs(airport): 
            while graph[airport]: 
                next_airport = graph[airport].pop(0) 
                dfs(next_airport) 

            res.append(airport) 

        dfs("JFK") 
        return res[::-1]