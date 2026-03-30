class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false
        const isMatch = () => {
            for (let i = 0; i < 26; i ++) {
                if (s1Bucket[i] !== s2Bucket[i]) {
                    return false
                }
            }

            return true
        }
        let s1Bucket = new Array(26).fill(0);
        let s2Bucket = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i ++) {
            let s1Diff = s1[i].charCodeAt(0) - 'a'.charCodeAt(0)
            let s2Diff = s2[i].charCodeAt(0) - 'a'.charCodeAt(0)
            s1Bucket[s1Diff] ++
            s2Bucket[s2Diff] ++
        } 

        if (isMatch()) return true


        // shift one character
        let l = 0;
        for (let r = s1.length; r < s2.length; r ++) {
            // delete character at l position from current substring
            let diff = s2[l].charCodeAt(0) - 'a'.charCodeAt(0)
            s2Bucket[diff] --
            l++
            // add current, which should be at position r

            let diffR = s2[r].charCodeAt(0) - 'a'.charCodeAt(0)
            s2Bucket[diffR] ++

            if (isMatch()) return true
        }
        return false

    }


}
