class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict, memo = {}) { 
        if (s in memo) return memo[s] 
        if (s === "") return true  

        for (let word of wordDict) {
            if (s.startsWith(word)) {
                if (this.wordBreak(s.slice(word.length), wordDict, memo)) { 
                    memo[s] = true
                    return true
                } 
            }
        }  

        memo[s] = false
        return false
    }
}
