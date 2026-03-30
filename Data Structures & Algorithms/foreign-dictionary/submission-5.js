class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) { 
        let adj = {} 
        let indegree = {} 
        for (let w of words) {
            for (let c of w) {
                adj[c] = new Set() 
                indegree[c] = 0
            }
        } 

        for (let i = 0; i < words.length - 1; i ++) {
            let w1 = words[i] 
            let w2 = words[i + 1] 
            let minLen = Math.min(w1.length, w2.length) 

            if ( 
                w1.slice(0, minLen) === w2.slice(0, minLen) && 
                w1.length > w2.length) return '' 

            for (let j = 0; j < minLen; j ++) {
                if (w1[j] !== w2[j]) {
        if (!adj[w1[j]].has(w2[j])) {
            adj[w1[j]].add(w2[j]);
            indegree[w2[j]] += 1;
        }
        break; // break only after processing first difference
    }  
            }
        } 


        let q = [] 
        for (let key in indegree) {
            if (indegree[key] === 0) {
                q.push(key)
            }
        } 

        let res = [] 
        while (q.length > 0) {
            let c = q.shift() 
            res.push(c) 

            for (let nei of adj[c]) {
                indegree[nei] -- 
                if (indegree[nei] === 0) {
                    q.push(nei)
                }
            }
        } 

        if (res.length !== Object.keys(indegree).length) {
            return ''
        } 

        return res.join('')

    } 
}
