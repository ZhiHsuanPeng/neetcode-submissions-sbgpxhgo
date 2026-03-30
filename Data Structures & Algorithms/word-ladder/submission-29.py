class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: 
            return 0 

        wordList.append(beginWord)        
        patternMap = defaultdict(list) 

        for word in wordList: 
            for i in range(len(word)): 
                pattern = word[:i] + '*' + word[i + 1:] 
                patternMap[pattern].append(word) 

        q = deque([beginWord]) 
        visited = set([beginWord]) 

        res = 1
        while q:  
            for _ in range(len(q)): 
                curWord = q.popleft()  

                if curWord == endWord: 
                    return res

                for i in range(len(curWord)): 
                    pattern = curWord[:i] + '*' + curWord[i + 1:] 
                    for nei in patternMap[pattern]: 
                        if nei not in visited: 
                            q.append(nei) 
                            visited.add(nei)  

            res += 1

        return 0 

