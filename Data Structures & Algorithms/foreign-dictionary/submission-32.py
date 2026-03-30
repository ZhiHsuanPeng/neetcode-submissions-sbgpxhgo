class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = { c: list() for w in words for c in w } 
        indegree = { c: 0 for w in words for c in w } 
        n = len(words) 

        for i in range(n - 1): 
            w1 = words[i] 
            w2 = words[i + 1] 

            if len(w1) > len(w2) and w1.startswith(w2): 
                return "" 

            for j in range(min(len(w1), len(w2))): 
                if w1[j] != w2[j]: 
                    adj[w1[j]].append(w2[j]) 
                    indegree[w2[j]] += 1  
                    break
                

        q = deque() 
        res = []  

        for node in indegree: 
            if indegree[node] == 0: 
                q.append(node)

        while q: 
            curNode = q.popleft() 

            res.append(curNode) 

            for nei in adj[curNode]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei) 

        if len(res) != len(adj): 
            return "" 

        return "".join(res)