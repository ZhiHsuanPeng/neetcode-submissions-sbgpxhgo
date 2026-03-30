class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let maxProfit = 0;
        for (let r = 1; r < prices.length; r ++) {
            if (prices[r] > prices[l]) {
                let profit = prices[r] - prices[l]
                maxProfit = Math.max(profit, maxProfit)
            } else if (prices[r] < prices[l]) {
                l = r;
            }
        }

        return maxProfit
    }
}
