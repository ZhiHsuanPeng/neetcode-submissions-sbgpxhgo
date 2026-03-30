class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = { n: [] for n in range(numCourses) } 
        indegree = { n: 0 for n in range(numCourses) } 

        for must, after in prerequisites: 
            adj[must].append(after) 
            indegree[after] += 1 

        q = deque()  

        for n in indegree: 
            if indegree[n] == 0: 
                q.append(n) 

        count = 0
        while q:  
            count += 1
            cur = q.popleft() 

            for nei in adj[cur]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei)  

        return True if count == numCourses else False
