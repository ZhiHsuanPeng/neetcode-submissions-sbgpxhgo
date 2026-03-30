class Solution:
    def change(self, amount: int, coins: List[int]) -> int: 
        memo = {}
        def dfs(i, cur):  
            if (i, cur) in memo: 
                return memo[(i, cur)] 

            if cur > amount or i == len(coins): 
                return 0
            
            if cur == amount:  
                return 1

            memo[(i, cur)] = dfs(i + 1, cur) + dfs(i, cur + coins[i]) 
            return memo[(i, cur)] 

        
        return dfs(0, 0)