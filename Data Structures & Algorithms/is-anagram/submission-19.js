class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { 
        if (s.length !== t.length) return false 

        let bucket = new Array(26).fill(0) 

        for (let i = 0; i < s.length; i ++) {
            bucket[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] ++ 
            bucket[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] --
        } 

        return bucket.every(x => x === 0)
    }
}
