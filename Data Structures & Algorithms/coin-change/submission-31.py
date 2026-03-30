class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:    
        dp = [float('inf')] * (amount + 1) 
        dp[0] = 0 

        for i in range(0, amount + 1): 
            if dp[i] == float('inf'): 
                continue; 
            
            for coin in coins: 
                if i + coin <= amount: 
                    dp[i + coin] = min(dp[i + coin], 1 + dp[i]) 

        return dp[amount] if dp[amount] != float('inf') else -1