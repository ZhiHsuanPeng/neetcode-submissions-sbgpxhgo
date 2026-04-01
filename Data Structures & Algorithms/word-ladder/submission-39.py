class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: 
            return 0 

        wordSet = set(wordList) 
        wordSet.add(endWord) 

        patternMap = defaultdict(list)
        for word in wordSet: 
            for i in range(len(word)): 
                pattern = word[:i] + '*' + word[i + 1:] 
                patternMap[pattern].append(word) 

        q = deque([beginWord]) 
        visited = set([beginWord]) 

        res = 1 

        while q: 
            for _ in range(len(q)): 
                cur = q.popleft() 

                if cur == endWord: 
                    return res 

                for i in range(len(cur)): 
                    pattern = cur[:i] + '*' + cur[i + 1:] 
                    for nei in patternMap[pattern]: 
                        if nei not in visited: 
                            visited.add(nei) 
                            q.append(nei) 

            res += 1 

        return 0    