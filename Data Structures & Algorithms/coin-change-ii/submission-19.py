class Solution:
    def change(self, amount: int, coins: List[int]) -> int:

        n = amount 
        dp = [0] * (n + 1) 
        dp[0] = 1 

        for coin in coins: 
            for i in range(coin, n + 1): 
                dp[i] += dp[i - coin] 

        return dp[-1]