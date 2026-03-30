class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        n = amount + 1 

        dp = [float('inf')] * n 
        dp[0] = 0

        for i in range(n):
            if dp[i] == float('inf'): 
                continue 

            for coin in coins: 
                if i + coin < n: 
                    dp[i + coin] = min(dp[i + coin], dp[i] + 1)

        return dp[-1] if dp[-1] != float('inf') else -1