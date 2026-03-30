class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let min = prices[0];
       let max = min;
       let profit = 0;
       for (let i = 0; i < prices.length; i ++) {
        if (prices[i] != prices.length - 1 && prices[i] <= min) {
            min = max = prices[i]
        } else if (prices[i] > max) {
            max = prices[i];
            profit = Math.max(profit, max - min)
        }
       }

       return profit
    }
}
