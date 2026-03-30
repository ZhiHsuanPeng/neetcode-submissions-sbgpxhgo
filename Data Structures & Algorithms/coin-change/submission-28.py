class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:    
        memo = {} 

        def dfs(cur): 
           
            if cur < 0: 
                return float('inf') 
            if cur == 0:
                return 0  
            
            if cur in memo:
                return memo[cur] 

            best = float('inf')
            for coin in coins:
                best = min(best, 1 + dfs(cur - coin)) 

            memo[cur] = best 
            return best 

        res = dfs(amount) 
        return res if res != float('inf') else -1