class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        n = numCourses 
        graph = defaultdict(list) 
        indegree = [ 0 for i in range(n) ] 

        for after, must in prerequisites: 
            indegree[after] += 1 
            graph[must].append(after) 

        
        q = deque() 

        for i in range(n): 
            if indegree[i] == 0: 
                q.append(i) 

        count = 0 
        res = []
        while q: 
            cur = q.popleft() 
            count += 1 
            res.append(cur)

            for nei in graph[cur]: 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei) 

        return res if count == n else []