class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let gp = {};

        for (const str of strs) {
            let bucket = new Array(26).fill(0);

            for (const c of str) {
                let diff = c.charCodeAt(0) - 'a'.charCodeAt(0);
                bucket[diff] ++
            }

            let key = bucket.join('#');

            if (!gp[key]) gp[key] = [];
            gp[key].push(str)
        }

        return Object.values(gp)
    }
}
