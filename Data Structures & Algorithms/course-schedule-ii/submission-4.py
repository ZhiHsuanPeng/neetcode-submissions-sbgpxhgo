class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = defaultdict(list) 
        indegree = [0] * numCourses 

        for dest, src in prerequisites: 
            adj[src].append(dest) 
            indegree[dest] += 1 

        q = deque() 

        for i in range(len(indegree)): 
            if indegree[i] == 0: 
                q.append(i) 

        res = [] 
        while q: 
            cur = q.popleft()
            res.append(cur) 

            for nei in adj[cur]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei) 

        return res if len(res) == numCourses else []