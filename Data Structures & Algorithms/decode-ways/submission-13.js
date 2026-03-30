class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {   
        if (s[0] === '0') return 0
        const n = s.length + 1 

        let prev1 = 1 
        let prev2 = 1 

        for (let i = 2; i < n; i ++) { 
            let current = 0 

            if (s[i - 1] !== '0') {
                current += prev1    
            } 

            let twoD = Number(s.slice(i - 2, i)) 

            if (twoD >= 10 && twoD <= 26) {
                current += prev2
            } 

            prev2 = prev1 
            prev1 = current
        }
         
        return prev1
    } 
}
