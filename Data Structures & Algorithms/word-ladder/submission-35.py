class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: 
            return 0

        wordList.append(beginWord) 

        pattern_map = defaultdict(list) 

        for word in wordList: 
            for j in range(len(word)): 
                pattern = word[:j] + '*' + word[j + 1:] 
                pattern_map[pattern].append(word) 

        q = deque([beginWord]) 
        visited = set(beginWord) 
        res = 1

        while q:  
            for _ in range(len(q)):
                curWord = q.popleft()  

                if curWord == endWord: 
                    return res

                for j in range(len(curWord)): 
                    pattern = curWord[:j] + '*' + curWord[j + 1:] 
                    
                    for nei in pattern_map[pattern]: 
                        if nei not in visited: 
                            q.append(nei) 
                            visited.add(nei)  

            res += 1 

        return 0