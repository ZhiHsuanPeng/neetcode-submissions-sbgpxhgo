class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) { 
        const indegree = new Array(numCourses).fill(0) 
        const graph = new Array(numCourses).fill(null).map(() => []) 

        for (const [after, must] of prerequisites) {
            graph[must].push(after) 
            indegree[after] ++
        } 

        let q = [] 
        for (let i = 0; i < indegree.length; i ++) {
            if (indegree[i] === 0) {
                q.push(i)
            }
        } 

        let head = 0 
        let count = 0 
        while(head < q.length) { 
            let course = q[head ++]
            count ++ 
            for (const nei of graph[course]) {
                indegree[nei] -- 
                if (indegree[nei] === 0) {
                    q.push(nei)
                }
            }
        } 

        return count === numCourses
    }
}
