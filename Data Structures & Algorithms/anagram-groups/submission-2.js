class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const count = {};

        for (const str of strs) {
            let key = new Array(26).fill(0);
            for (const c of str) {
                key[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            }
            key = key.join('#');

            if (!(count[key])) {
                count[key] = [];
            }

            count[key].push(str)
        }

        return Object.values(count)
    }
}
