class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        memo = {}
        def dfs(i, cur): 
            if (i, cur) in memo: 
                return memo[(i, cur)]

            if cur == amount: 
                return 1 

            if cur > amount or i == len(coins): 
                return 0 

            res = dfs(i + 1, cur) + dfs(i, cur + coins[i])  
            memo[(i, cur)] = res 
            return res

        return dfs(0, 0) 
            