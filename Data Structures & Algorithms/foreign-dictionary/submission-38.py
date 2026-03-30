class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = { c: list() for w in words for c in w } 
        indegree = { c: 0 for w in words for c in w }  

        for i in range(len(words) - 1): 
            w1 = words[i] 
            w2 = words[i + 1] 

            if w1.startswith(w2) and len(w1) > len(w2): 
                return "" 

            minLen = min(len(w1), len(w2))
            for j in range(minLen): 
                if w1[j] == w2[j]: 
                    continue 

                adj[w1[j]].append(w2[j]) 
                indegree[w2[j]] += 1 
                break 

        q = deque() 

        for c in indegree: 
            if indegree[c] == 0: 
                q.append(c)  

        res = [] 

        while q: 
            cur = q.popleft() 
            res.append(cur)

            for nei in adj[cur]: 
                indegree[nei] -= 1 

                if indegree[nei] == 0: 
                    q.append(nei) 
        
        return "".join(res) if len(res) == len(adj) else ""