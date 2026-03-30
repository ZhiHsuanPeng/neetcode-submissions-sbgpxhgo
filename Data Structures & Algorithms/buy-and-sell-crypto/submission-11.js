class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) { 
        let l = 0 
        let max = 0 

        for (let r = 0; r < prices.length; r ++) {
            let cur = prices[r]  
            if (cur < prices[l]) {
                l = r 
                continue
            }
            max = Math.max(max, prices[r] - prices[l])
        } 

        return max
    }
}
