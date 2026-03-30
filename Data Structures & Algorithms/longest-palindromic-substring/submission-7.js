class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {  
        let resStart = 0 
        let resLen = 0 

        for (let i = 0; i < s.length; i ++) {
            let odd = this.helper(i, i, s) 
            let even = this.helper(i, i + 1, s) 

            if (resLen < odd[1]) {
                resStart = odd[0] 
                resLen = odd[1]
            } 

            if (resLen < even[1]) {
                resStart = even[0] 
                resLen = even[1]
            }
        } 

        return s.substring(resStart, resStart + resLen)
    } 

    helper(l, r, s) {
        while(s[l] === s[r] && l >= 0 && r < s.length) {
          l -- 
          r ++  
        } 

        return [l + 1, r - l - 1]
    }
    
}
