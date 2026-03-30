class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = defaultdict(list)  
        for dest, src in prerequisites: 
            adj[src].append(dest)

        state = [0] * numCourses 

        def dfs(i): 
            if state[i] == 1: 
                return False 

            if state[i] == 2: 
                return True  

            state[i] = 1

            for nei in adj[i]: 
                if not dfs(nei): 
                    return False 

            state[i] = 2 

            return True 

        for i in range(len(state)): 
            if state[i] == 0 and not dfs(i): 
                return False 

        return True