class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) { 
        let dp = new Array(s.length + 1).fill(false) 

        dp[0] = true 

        for (let i = 0; i < dp.length; i ++) {
            if (dp[i]) {
                for (const word of wordDict) {
                    const sliced = s.slice(i) 
                    if (sliced.startsWith(word)) {
                        dp[i + word.length] = true
                    }
                }
            }
        } 

        return dp[dp.length - 1]
    }
}
