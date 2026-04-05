class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        end = 0 

        for _, _, to in trips: 
            end = max(end, to) 

        road = [ 0 ] * ( end + 1 ) 

        for n, u, v in trips: 
            road[u] += n 
            road[v] -= n 

        count = 0 
        for c in road: 
            count += c 
            if count > capacity: 
                return False 

        return True