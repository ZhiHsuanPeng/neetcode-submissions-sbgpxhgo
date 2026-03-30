class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {  
        const graph = new Array(numCourses).fill(0).map(() => []) 

        for (const [after, must] of prerequisites) {
            graph[must].push(after)
        } 
         
        // 0 = not visited, 1 = visiting, 2 = checked
        let state = new Array(numCourses).fill(0) 

        function dfs(course) {
            if (state[course] === 1) return false 
            if (state[course] === 2) return true 

            state[course] = 1 
            
            for (const nei of graph[course]) {
                if (!dfs(nei)) return false
            } 

            state[course] = 2 
            return true
        } 

        for (let i = 0; i < graph.length; i ++) {
            if (!dfs(i)) return false
        } 

        return true
    }
}
