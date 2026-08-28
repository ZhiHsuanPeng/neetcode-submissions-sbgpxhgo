class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        hold = [0] * len(prices) 
        sell = [0] * len(prices) 
        skip = [0] * len(prices) 

        hold[0] = - prices[0] 

        for i in range(1, len(prices)): 
            hold[i] = max(hold[i - 1], skip[i - 1] - prices[i]) 
            skip[i] = max(skip[i - 1], sell[i - 1]) 
            sell[i] = hold[i - 1] + prices[i] 

        return max(sell[-1], skip[-1])