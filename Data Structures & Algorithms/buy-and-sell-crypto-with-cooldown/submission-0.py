class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        def dfs(i, buying):
            if i >= len(prices): 
                return 0 

            skip = dfs(i + 1, buying) 

            if buying: 
                buy = dfs(i + 1, not buying) - prices[i]
                return max(buy, skip) 
            else: 
                sell = dfs(i + 2, not buying) + prices[i] 
                return max(sell, skip) 

        return dfs(0, True)