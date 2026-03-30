class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let bucketS = new Array(26).fill(0);
        let bucketT = new Array(26).fill(0);

        for (let i = 0; i < s.length; i ++) {
            let diffS = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            let diffT = t[i].charCodeAt(0) - 'a'.charCodeAt(0);

            bucketS[diffS] ++
            bucketT[diffT] ++
        }

        return bucketS.join('') === bucketT.join('')

    }
}
