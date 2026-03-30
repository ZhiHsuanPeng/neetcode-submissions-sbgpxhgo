class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {  
        const n = s.length
        const dp = new Array(n).fill(0).map(() => new Array(n).fill(false)) 

        let count = 0
        for (let i = n - 1; i >= 0; i --) {
            for (let j = i; j < n; j ++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true 
                    count ++ 
                }
            }
        } 

        return count
    }
}
