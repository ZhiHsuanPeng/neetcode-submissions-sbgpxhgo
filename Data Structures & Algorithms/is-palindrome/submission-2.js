class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1
        let regex = /^[a-zA-Z0-9]$/
        while(left < right) {
            while (left < right && !regex.test(s[left])) {
                left ++
            } 
            while (left < right && !regex.test(s[right])) {
                right --
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            left ++
            right --
        }
        return true
    }

}
