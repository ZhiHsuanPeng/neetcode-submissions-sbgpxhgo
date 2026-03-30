class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: 
            return 0 

        wordList.append(beginWord) 
        adj = defaultdict(list) 
        
        for w1 in wordList: 
            for w2 in wordList: 
                if w1 == w2: 
                    continue  

                if self.isValid(w1, w2): 
                    adj[w1].append(w2) 

        visited = set([beginWord]) 
        q = deque([beginWord])  
        res = 1

        while q:  
            res += 1
            for _ in range(len(q)): 
                curWord = q.popleft() 

                for nei in adj[curWord]: 
                    if nei == endWord: 
                        return res 

                    if nei not in visited: 
                        visited.add(nei) 
                        q.append(nei) 

        return 0 

            
                
    
    def isValid(self, w1, w2): 
        if len(w1) != len(w2): 
            return False 

        diff = 0 
        for i in range(len(w1)):
            if w1[i] != w2[i]: 
                diff += 1 
                if diff == 2: 
                    return False 

        return True
