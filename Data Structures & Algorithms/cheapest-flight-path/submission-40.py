class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        dist = [ float('inf') ] * n 
        dist[src] = 0 

        for _ in range(k + 1):
            next_dist = dist.copy() 

            for u, v, cost in flights: 
                if dist[u] == float('inf'): 
                    continue 

                if dist[u] + cost < next_dist[v]: 
                    next_dist[v] = dist[u] + cost
            
            dist = next_dist 

        return dist[dst] if dist[dst] != float('inf') else -1