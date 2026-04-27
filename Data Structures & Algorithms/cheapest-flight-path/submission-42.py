class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        dist = [float('inf')] * n 
        dist[src] = 0 

        while k >= 0: 
            nxt = dist.copy() 

            for u, v, cost in flights: 
                if dist[u] == float('inf'): 
                    continue 

                if dist[u] + cost < nxt[v]: 
                    nxt[v] = dist[u] + cost 

            dist = nxt 
            k -= 1 
        
        return dist[dst] if dist[dst] != float('inf') else -1