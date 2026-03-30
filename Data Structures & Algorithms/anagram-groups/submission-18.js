class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) { 
        const map = {} 

        for (const str of strs) {
            let key; 
            let bucket = new Array(26).fill(0) 

            for (let i = 0; i < str.length; i ++) {
                let char = str[i] 
                bucket[char.charCodeAt(0) - 'a'.charCodeAt(0)] ++
            } 

            key = bucket.join('#') 

            if (!map[key]) {
                map[key] = [] 
                map[key].push(str)
            } else {
                map[key].push(str)
            }
        } 

        return Object.values(map)
    }
}
