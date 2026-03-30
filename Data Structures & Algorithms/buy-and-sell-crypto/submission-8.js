class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = 0;
        for (let r = 1; r < prices.length; r ++) {
            let cur = prices[r]
            if (cur <= prices[l]) {
                l = r 
                continue
            } else {
                max = Math.max((cur - prices[l]), max)
            }
        }

        return max 
    }
}
