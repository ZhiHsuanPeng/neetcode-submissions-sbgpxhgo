class Solution:
    def change(self, amount: int, coins: List[int]) -> int: 
        memo = {} 

        def dfs(i, cur):  
            if (i , cur) in memo: 
                return memo[(i, cur)]

            if cur < 0: 
                return 0

            if cur == 0: 
                return 1

            res = 0
            for j in range(i, len(coins)): 
                res += dfs(j, cur - coins[j])   

            memo[(i, cur)] = res
            return memo[(i, cur)]

        
        return dfs(0, amount) 