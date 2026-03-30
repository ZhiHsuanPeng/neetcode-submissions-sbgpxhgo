class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let l = 0;
        let r = s.length - 1;
        let regex = /^[a-zA-Z0-9]$/

        while(l < r) {
            while(l < r && !regex.test(s[l])) {
                l ++
            } 
            while(l < r && !regex.test(s[r])) {
                r --
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l ++;
            r --
        }

        return true
    }
}
