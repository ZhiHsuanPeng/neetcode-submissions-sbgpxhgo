class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        hold = [0] * n 
        skip = [0] * n 
        sell = [0] * n 

        hold[0] = -prices[0] 

        for i in range(1, n): 
            hold[i] = max(hold[i - 1], skip[i - 1] - prices[i]) 
            skip[i] = max(sell[i - 1], skip[i - 1]) 
            sell[i] = hold[i - 1] + prices[i] 

        return max(sell[-1], skip[-1])