class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) { 
        const n = s.length
        const dp = new Array(n).fill(0).map(() => new Array(n).fill(false)) 

        let resStart = 0 
        let resLen = 0
        for (let i = n - 1; i >= 0; i --) {
            for (let j = i; j < n; j ++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true 
                    if (resLen < j - i + 1) {
                        resStart = i 
                        resLen = j - i + 1
                    }
                }
            }
        } 

        return s.substring(resStart, resStart + resLen)
    }
}
