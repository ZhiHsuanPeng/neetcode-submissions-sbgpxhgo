class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const characters = new Array(26).fill(0)

        if (s.length !== t.length) {
            return false
        }

        for (let i = 0; i < s.length; i ++) {
            characters[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] ++ 
            characters[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] -- 
        }

        return characters.every(c => c === 0)
    }
}
