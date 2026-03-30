class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = { c: set() for w in words for c in w } 
        indegree = { c: 0 for w in words for c in w } 

        for i in range(0, len(words) - 1):
            w1 = words[i] 
            w2 = words[i + 1] 
            minLen = min(len(w1), len(w2)) 

            if len(w1) > len(w2) and w1[:minLen] == w2[:minLen]: 
                return ''

            for j in range(minLen): 
                c1= w1[j] 
                c2 = w2[j] 
                if c1 != c2: 
                    if c2 not in adj[c1]: 
                        adj[c1].add(c2) 
                        indegree[c2] += 1  
                    break


        q = deque()  
        res = []
        for key,val in indegree.items(): 
            if val == 0: 
                q.append(key)

        while len(q) > 0:  
            cur = q.popleft() 
            res.append(cur) 

            for nei in adj[cur]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei) 

        if len(res) != len(adj.keys()): 
            return '' 

        return ''.join(res)
