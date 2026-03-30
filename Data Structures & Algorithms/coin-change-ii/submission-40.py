class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        memo = {}

        def dfs(i, cur): 
            if (i, cur) in memo: 
                return memo[(i, cur)]

            if cur == amount: 
                return 1 

            if i == len(coins) or cur > amount: 
                return 0 

            skip = dfs(i + 1, cur) 
            take = dfs(i, cur + coins[i]) 

            memo[(i, cur)] = skip + take
            return skip + take 

        return dfs(0, 0)