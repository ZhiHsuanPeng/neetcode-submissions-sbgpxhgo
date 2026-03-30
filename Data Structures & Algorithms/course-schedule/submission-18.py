class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = defaultdict(list) 
        indegree = [0] * numCourses 

        for dest, source in prerequisites: 
            adj[source].append(dest) 
            indegree[dest] += 1 

        q = deque() 

        for i in range(len(indegree)): 
            if indegree[i] == 0:
                q.append(i) 

        visitedNum = 0
        while q: 
            cur = q.popleft() 
            visitedNum += 1 

            for nei in adj[cur]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei) 

        return True if visitedNum == numCourses else False