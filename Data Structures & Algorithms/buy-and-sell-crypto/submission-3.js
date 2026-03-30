class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1; 
        let max = 0;

        while( r <= prices.length - 1 ) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                max = Math.max(max, profit);
                r ++
            } else {
                l = r;
                r ++
            }
        } 
        return max
    }
}
