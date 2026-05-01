class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = { c: list() for w in words for c in w } 
        indegree = { c: 0 for w in words for c in w } 

        for i in range(len(words) - 1): 
            w1 = words[i] 
            w2 = words[i + 1] 

            if w1.startswith(w2) and len(w2) < len(w1): 
                return "" 

            for j in range(min(len(w1), len(w2))): 
                c1 = w1[j] 
                c2 = w2[j] 

                if c1 != c2:
                    adj[c1].append(c2) 
                    indegree[c2] += 1 
                    break 

        q = deque() 

        for node in indegree: 
            if indegree[node] == 0: 
                q.append(node) 

        order = []
        while q: 
            curNode = q.popleft() 
            order.append(curNode) 

            for nei in adj[curNode]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0:  
                    q.append(nei)  

        res = "".join(order)  
        return res if len(res) == len(adj) else "" 

        