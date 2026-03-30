class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sortS = new Array(26).fill(0);
        let sortT = new Array(26).fill(0);

        for (let i = 0; i < s.length; i ++) {
            let diffS = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            let diffT = t[i].charCodeAt(0) - 'a'.charCodeAt(0);

            sortS[diffS] ++
            sortT[diffT] ++
        }
        return sortS.join('') === sortT.join('')
    }
}
