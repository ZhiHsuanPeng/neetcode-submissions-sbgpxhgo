class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0 

        for i in range(len(prices) - 1): 
            curD = prices[i] 
            nextD = prices[i + 1] 

            profit += max(0, nextD - curD) 

        return profit