class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = defaultdict(list) 
        indegree = [0] * numCourses 

        for must, after in prerequisites: 
            adj[must].append(after) 
            indegree[after] += 1 

        q = deque()  
        visited = set()

        for i in range(numCourses): 
            if indegree[i] == 0: 
                q.append(i)  
                visited.add(i)

        cnt = 0 

        while q:  
            cnt += 1
            curCourse = q.popleft() 

            for nei in adj[curCourse]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei) 

        return cnt == numCourses

