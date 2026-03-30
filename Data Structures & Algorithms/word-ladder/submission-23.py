class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        if endWord not in wordList: 
            return 0
        
        if beginWord not in wordList: 
            wordList.append(beginWord) 

        graph = {}  

        for i in range(len(wordList)): 
            cur = wordList[i] 
            graph[cur] = [] 

            for j in range(len(wordList)): 
                node = wordList[j] 
                if node == cur: 
                    continue 

                diff = 0 
                for c in range(len(cur)): 
                    if cur[c] != node[c]: 
                        diff += 1 
                
                if diff == 1: 
                    graph[cur].append(node)
            
        res = 0 
        q = deque([beginWord]) 
        visited = set() 

        while q:   
            res += 1
            for i in range(len(q)): 
                cur = q.popleft()  
                if cur == endWord: 
                    return res 

                for nei in graph[cur]: 
                    if nei not in visited: 
                        visited.add(nei) 
                        q.append(nei)

        return 0
