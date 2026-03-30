class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) { 
        // build graph   
        let list = [...wordList] 
        list.push(beginWord, endWord)
        let graph = {}  

        for (let i = 0; i < list.length; i ++) {
            let cur = list[i] 
            for (let j = 0; j < list.length; j ++) {
                if (j === i) continue; 

                if (this.isValid(cur, list[j])) {
                    if (!graph[cur]) {
                        graph[cur] = []
                    } 

                    graph[cur].push(wordList[j])
                }
            }
        }  

        let visited = new Set()
        let q = [beginWord] 
        let count = 1
        while(q.length) {  
            const levelSize = q.length
            for (let i = 0; i < levelSize; i ++) {
                const cur = q.shift() 
                if (cur === endWord) return count
                visited.add(cur)
                for (const nei of graph[cur] || []) {
                    if (!visited.has(nei)) {
                        visited.add(nei)
                        q.push(nei) 
                    }
                }
            }
            count ++ 
        } 

        return 0
    } 

    isValid(w1, w2) {
        let diff = 0 

        for (let i = 0; i < w1.length; i ++) { 
            if(w1[i] !== w2[i]) diff ++
        } 

        return diff === 1
    }
}
