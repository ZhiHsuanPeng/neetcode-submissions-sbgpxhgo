class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) { 
        const res = [] 
        const part = [] 
        this.dfs(0, s, part, res) 
        return res
    } 

    dfs(start, s, part, res) {
        if (start === s.length) {
            res.push([...part]) 
            return
        } 

        for (let i = start; i < s.length; i ++) {
            if (this.isValid(s, start, i)) {
                part.push(s.substring(start, i + 1)) 
                this.dfs(i + 1, s, part, res) 
                part.pop()
            }
        }
    } 

    isValid(s, l ,r) {
        while(l < r) {
            if (s[l] !== s[r]) {
                return false
            } 

            l ++ 
            r --
        } 

        return true
    }
}
