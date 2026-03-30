class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        # buying => current level
        def dfs(i, buying): 
            if i >= len(prices): 
                return 0 

            # skip, do nothing
            res = dfs(i + 1, buying) 

            # every level can do extra buying/selling
            if buying: 
                res = max(res, dfs(i + 1, False) - prices[i]) 
            else:   
                # selling means the next recursion is going to be 
                res = max(res, dfs(i + 2, True) + prices[i]) 

            return res 

        return dfs(0, True)