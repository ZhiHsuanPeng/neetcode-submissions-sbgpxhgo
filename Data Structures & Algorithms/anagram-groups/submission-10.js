class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (const str of strs) {
            let key = new Array(26).fill(0)
            for (const c of str) {
                key[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            console.log(key)
            key = key.join('#')
            if (!map[key]) {
                map[key] = [];
            }
            
            map[key].push(str)
        }
        return Object.values(map)
}
}