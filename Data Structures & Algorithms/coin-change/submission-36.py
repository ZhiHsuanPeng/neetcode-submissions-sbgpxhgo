class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        memo = {}
        def dfs(cur): 
            if cur in memo: 
                return memo[cur] 

            if cur > amount: 
                return float('inf') 
            
            if cur == amount: 
                return 0 

            ret = float('inf') 

            for coin in coins: 
                ret = min(ret, 1 + dfs(cur + coin))  
            
            memo[cur] = ret

            return ret 

        res = dfs(0) 

        return res if res != float('inf') else -1