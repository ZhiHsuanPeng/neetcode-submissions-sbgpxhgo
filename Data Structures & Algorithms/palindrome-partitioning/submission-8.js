class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) { 
        const part = [] 
        const res = [] 
        this.dfs(0, s, part, res) 
        return res
    } 

    dfs(start, s, part, res) {
        if (start === s.length) {
            res.push([...part]) 
            return
        } 

        for (let i = start; i < s.length; i ++) {
            const partition = s.slice(start, i + 1) 
            if (this.isValid(partition)) {
                part.push(partition) 
                this.dfs(i + 1, s, part, res) 
                part.pop()
            }
        }
    } 

    isValid(word) {
        let l = 0 
        let r = word.length - 1 

        while(l < r) {
            if (word[l] !== word[r]) {
                return false
            } 

            l ++ 
            r -- 
        } 

        return true
    }
}
