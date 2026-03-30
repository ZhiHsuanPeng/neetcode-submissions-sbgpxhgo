class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) { 
        let res = 0  
        let start = 0

        for (let i = 0; i < s.length; i ++) {
            let [ oddLen, oddStart ] = this.countLongest(i, i, s) 
            let [ evenLen, evenStart ] = this.countLongest(i, i + 1, s)
            if (oddLen > res) {
                res = oddLen 
                start = oddStart
            }  

            if (evenLen > res) {
                res = evenLen 
                start = evenStart
            }
        }  

        return s.substring(start, start + res)
    } 

    countLongest(l, r, s) {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            l --
            r ++ 
        } 

        return [ r - l - 1, l + 1 ] 
    }
}
