class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: 
            return 0
        
        if beginWord not in wordList: 
            wordList.append(beginWord) 

        pattern_map = defaultdict(list)

        for word in wordList: 
            for i in range(len(word)): 
                pattern = word[:i] + "*" + word[i + 1:] 
                pattern_map[pattern].append(word)

        res = 0 
        q = deque([beginWord]) 
        visited = {beginWord} 

        while q:   
            res += 1
            for i in range(len(q)): 
                cur = q.popleft()    

                if cur == endWord: 
                    return res

                for j in range(len(cur)): 
                    pattern = cur[:j] + "*" + cur[j + 1:] 

                    for nei in pattern_map[pattern]: 
                        if nei not in visited: 
                            visited.add(nei) 
                            q.append(nei)


        return 0
