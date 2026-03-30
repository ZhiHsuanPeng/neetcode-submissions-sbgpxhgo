class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) { 
        const res = [] 
        this.dfs(0, s, [], res) 
        return res
    } 

    dfs(start, s, part, res) {
        if ( start === s.length ) {
            res.push([...part]) 
            return
        } 

        for (let i = start; i < s.length; i ++) {
            const partition = s.slice(start, i + 1) 
            if (this.isPali(partition)) {
                part.push(partition) 
                this.dfs(i + 1, s, part, res) 
                part.pop()
            }
        }
    } 

    isPali(string) {
        let l = 0 
        let r = string.length - 1 
        while(l < r) {
            if (string[l] !== string[r]) {
                return false
            } 
            l ++ 
            r --
        } 

        return true
    }
}
