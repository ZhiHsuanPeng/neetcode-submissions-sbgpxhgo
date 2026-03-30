class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const bucket = new Array(26).fill(0);

        for (let i = 0; i < s.length; i ++) {
            let sDiff = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            let tDiff = t[i].charCodeAt(0) - 'a'.charCodeAt(0);

            bucket[sDiff] ++
            bucket[tDiff] --
        }

        return bucket.every(c => c === 0)
    }
}
