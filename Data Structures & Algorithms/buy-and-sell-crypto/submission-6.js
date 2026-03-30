class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let max = 0;
        for (let r = 0; r < prices.length; r ++) {
            if (prices[r] < prices[l]) {
                l = r
            } else {
                max = Math.max((prices[r] - prices[l]), max)
            }
        }

        return max
    }
}
