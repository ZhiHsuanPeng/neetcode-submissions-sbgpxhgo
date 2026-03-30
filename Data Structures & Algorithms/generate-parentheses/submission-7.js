class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) { 
        if (n === 0) return []
        let res = []  

        this.gen('', 0, 0, res, n)
         

        return res 
    } 

    gen(cur, open, close, arr, n)  { 

        if (open === close && open === n) {
            arr.push(cur) 
            return
        }

        if (open < n) {
            let next = cur + '(' 
            this.gen(next, open + 1, close, arr, n)
        }  

        if (close < open) {
            let next = cur + ')' 
            this.gen(next, open, close + 1, arr,n)
        } 

     
    }
}
