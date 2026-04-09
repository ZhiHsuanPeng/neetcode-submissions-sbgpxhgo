class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList) 

        if endWord not in wordSet: 
            return 0

        beginSet = { beginWord } 
        endSet = { endWord } 
        res = 1  
        visited = set()

        while beginSet and endSet: 
            if len(beginSet) > len(endSet): 
                beginSet, endSet = endSet, beginSet   

            nextSet = set()
            for w in beginSet: 
                for i in range(len(w)): 
                    for c in 'abcdefghijklmnopqrstuvwxyz': 

                        nextWord = w[:i] + c + w[i + 1:] 

                        if nextWord in endSet: 
                            return res + 1 

                        if nextWord not in visited and nextWord in wordSet: 
                            visited.add(nextWord) 
                            nextSet.add(nextWord)

            beginSet = nextSet  
            res += 1

        return 0
                
                