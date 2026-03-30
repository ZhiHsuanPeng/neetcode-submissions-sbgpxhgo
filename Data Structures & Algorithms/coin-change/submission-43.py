class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [ float('inf') ] * (amount + 1)   
        dp[0] = 0

        for i in range(len(dp)): 
            for c in coins: 
                if i + c < len(dp): 
                    dp[i + c] = min(dp[i + c], 1 + dp[i]) 

        return dp[-1] if dp[-1] != float('inf') else -1