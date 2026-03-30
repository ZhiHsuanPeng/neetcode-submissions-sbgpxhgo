class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if amount == 0:
            return 0

        q = deque([0]) 
        visited = [False] * ( amount + 1 ) 
        visited[0] = True 

        res = 0
        while q: 
            res += 1 

            for _ in range(len(q)): 
                cur = q.popleft()
                for coin in coins: 
                    nxt = coin + cur 
                    if nxt == amount: 
                        return res 
                    if nxt > amount or visited[nxt]: 
                        continue 

                    visited[nxt] = True 
                    q.append(nxt) 

        return -1 