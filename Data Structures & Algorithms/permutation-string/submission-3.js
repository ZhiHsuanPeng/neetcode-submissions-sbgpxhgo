class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        const isMatch = (a, b) => {
            for (let i = 0; i < 26; i ++) {
                if (a[i] !== b[i]) {
                    return false
                }
            }

            return true
        }
        let s1Bucket = new Array(26).fill(0);
        let s2Bucket = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i ++) {
            let s1Diff = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
            let s2Diff = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
            s1Bucket[s1Diff] ++
            s2Bucket[s2Diff] ++
        }

        if (isMatch(s1Bucket, s2Bucket)) return true;

        let l = 0;
        for (let r = s1.length; r < s2.length; r ++) {
            let added = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Bucket[added] ++

            let deleted = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Bucket[deleted] --
            l ++

            if (isMatch(s1Bucket, s2Bucket)) return true
        }

        return false
    }
}
