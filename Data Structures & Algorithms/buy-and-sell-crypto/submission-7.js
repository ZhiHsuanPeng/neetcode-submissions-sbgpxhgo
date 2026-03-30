class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let max = 0;
        for (let r = 1; r < prices.length; r ++) {
            if (prices[r] > prices[l]) {
                max = Math.max(max, prices[r] - prices[l])
            } else {
                l = r
            }
        }

        return max
    }
}
