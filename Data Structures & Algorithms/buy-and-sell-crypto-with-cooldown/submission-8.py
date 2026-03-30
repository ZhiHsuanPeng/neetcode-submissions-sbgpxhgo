class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        def dfs(i, buying): 
            if i >= len(prices): 
                return 0 

            # skip, do nothing
            res = dfs(i + 1, buying) 

            # if last is buying, then in this dfs, we can sell it
            if buying: 
                res = max(res, dfs(i + 1, False) - prices[i]) 
            else:  
                # buy
                res = max(res, dfs(i + 2, True) + prices[i]) 

            return res 

        return dfs(0, True)