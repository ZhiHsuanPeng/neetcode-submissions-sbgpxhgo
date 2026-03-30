class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        adj = defaultdict(list) 
        for u, v, price in flights: 
            adj[u].append((v, price)) 

        q = [(0, src, 0)] 
        best = {} 

        while q: 
            cur_price, airport, stop = heapq.heappop(q) 

            if stop > k + 1: 
                continue 
            
            if airport == dst: 
                return cur_price 
            
            if (airport, stop) in best: 
                continue 

            best[(airport, stop)] = cur_price 

            for nei, price in adj[airport]: 
                heapq.heappush(q, (cur_price + price, nei, stop + 1)) 
        
        return -1