class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;
        let arrS = new Array(26).fill(0);
        let arrT = new Array(26).fill(0);
        s.split('').forEach(c => {
            let diff = c.charCodeAt(0) - 'a'.charCodeAt(0)
            arrS[diff] ++
        })

        t.split('').forEach(c => {
            let diff = c.charCodeAt(0) - 'a'.charCodeAt(0)
            arrT[diff] ++
        })

        console.log(arrS)
        console.log(arrT)
        return arrS.join('') === arrT.join('')
    }
}
