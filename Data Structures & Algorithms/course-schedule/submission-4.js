class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {  
        const indegree = new Array(numCourses).fill(0) 
        const graph = new Array(numCourses).fill(0).map(() => []) 

        for (const [after, must] of prerequisites) {
            indegree[after] ++ 
            graph[must].push(after)
        } 
        
        // start bfs from courses with 0 indegree
        let q = [] 
        let count = 0

        for (let i = 0; i < indegree.length; i ++) {
            if (indegree[i] === 0) {
                q.push(i)
            }
        } 

        let head = 0 
        while(head < q.length) {
            const curCourse = q[head++]
            count ++ 
            for (const nei of graph[curCourse]) {
                indegree[nei] -- 
                if (indegree[nei] === 0) {
                    q.push(nei)
                }
            }
        } 


        return count === numCourses
    }
}
