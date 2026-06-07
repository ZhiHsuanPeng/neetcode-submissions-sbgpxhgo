class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: 
            return 0  

        wordSet = set(wordList)
        begin = { beginWord } 
        end = { endWord } 
        visited = set()  
        cnt = 1

        while begin and end: 
            if len(begin) > len(end): 
                begin, end = end, begin 

            nextSet = set()
            for word in begin: 
                for i in range(len(word)):  
                    for c in 'abcdefghijklmnopqrstuvwxyz':  
                        nextWord = word[:i] + c + word[i + 1:] 

                        if nextWord in end: 
                            return cnt + 1 

                        if nextWord not in visited and nextWord in wordSet: 
                            visited.add(nextWord) 
                            nextSet.add(nextWord) 

            begin = nextSet 
            cnt += 1 

        return 0