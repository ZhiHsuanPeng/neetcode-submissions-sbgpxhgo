class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) { 
        if (!wordList.includes(endWord)) {
            return 0
        } 

        if (!wordList.includes(beginWord)) {
            wordList.push(beginWord)
        } 

        let graph = {} 

        for (let i = 0; i < wordList.length; i ++) {
            let cur = wordList[i] 
            graph[cur] = [] 

            for (let j = 0; j < wordList.length; j ++) {
                let nodes = wordList[j] 
                if (nodes === cur) continue 
                if (this.canTransform(cur, nodes)) {
                    graph[cur].push(nodes)
                }
            }
        } 

        let visited = new Set([beginWord])
        let q = [beginWord] 
        let count = 1  
        console.log(graph)
        while(q.length) {
            let levelSize = q.length 

            for (let i = 0; i < levelSize; i ++) {
                let word = q.shift() 
                if (word === endWord) return count  
                for (let nei of graph[word]) { 
                    if (!visited.has(nei)) {
                        q.push(nei)
                        visited.add(nei)
                    }
                }
            } 

            count ++
        } 

        return 0
    } 

    canTransform(w1, w2) {
        let diff = 0 

        for (let i = 0; i < w1.length; i ++) {
            if (w1[i] !== w2[i]) diff ++
        } 

        return diff === 1 
    }
}
