class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1) 
        dp[0] = 0 

        for i in range(len(dp)): 
            if dp[i] == float('inf'): 
                continue 

            for c in coins:  
                if i + c < len(dp):
                    dp[i + c] = min(dp[i] + 1, dp[i + c]) 

        return dp[-1] if dp[-1] != float('inf') else -1