class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let bucket = new Array(26).fill(0);

        for (let i = 0; i < s.length; i ++) {
            let diffS = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            let diffT = t[i].charCodeAt(0) - 'a'.charCodeAt(0);

            bucket[diffS] ++
            bucket[diffT] --
        }

        return bucket.every(count => count === 0)

    }
}
