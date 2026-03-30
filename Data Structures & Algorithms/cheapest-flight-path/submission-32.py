class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        dist = [float('inf')] * n 
        dist[src] = 0 

        for i in range(k + 1): 
            temp = dist.copy() 

            for j in range(n): 
                if dist[j] == float('inf'): 
                    continue 

                for u, v, price in flights: 
                    if dist[u] + price < temp[v]: 
                        temp[v] = dist[u] + price  
            dist = temp

        return dist[dst] if dist[dst] != float('inf') else -1                 