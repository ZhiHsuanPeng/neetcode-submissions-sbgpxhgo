class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        n = amount + 1 

        dp = [0] * n 
        dp[0] = 1 

        for coin in coins: 
            for i in range(coin, n): 
                dp[i] += dp[i - coin]

        return dp[amount] 