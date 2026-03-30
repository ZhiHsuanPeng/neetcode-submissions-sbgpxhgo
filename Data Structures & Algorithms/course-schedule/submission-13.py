class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        n = numCourses
        indegree = [ 0 for i in range(n)] 
        g = {} 

        for after, must in prerequisites: 
            if must not in g: 
                g[must] = [] 
            g[must].append(after) 
            indegree[after] += 1

        q = deque() 

        for i in range(n): 
            if indegree[i] == 0: 
                q.append(i) 

        visited = set()
        while q: 
            cur = q.popleft() 
            visited.add(cur)
            for nei in g.get(cur, []): 
                indegree[nei] -= 1 
                if indegree[nei] == 0: 
                    q.append(nei)  

        return len(visited) == n