class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        graph = { c: list() for w in words for c in w }
        indegree = { c: 0 for w in words for c in w }

        for i in range(len(words) - 1): 
            w1 = words[i] 
            w2 = words[i + 1]  

            if len(w1) > len(w2) and w1.startswith(w2): 
                return "" 

            for j in range(min(len(w1), len(w2))):  
                if w1[j] != w2[j]: 
                    graph[w1[j]].append(w2[j]) 
                    indegree[w2[j]] += 1 
                    break; 
        
        res = []
        q = deque() 
        for key in indegree: 
            if indegree[key] == 0: 
                q.append(key) 

        while q: 
            cur = q.popleft() 
            res.append(cur) 

            for nei in graph[cur]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei)  

        if len(res) != len(graph.keys()): 
                return ''

        return "".join(res)