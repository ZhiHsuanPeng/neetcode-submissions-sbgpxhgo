class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;
        let arr = new Array(26).fill(0);
        
        for (let i = 0; i < s.length; i ++) {
            let diffS = s.charCodeAt(i) - 'a'.charCodeAt(0)
            let diffT = t.charCodeAt(i) - 'a'.charCodeAt(0)
            arr[diffS] ++
            arr[diffT] --
        }

        return arr.every(count => count === 0)
    }
}
