class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) { 
        const indegree = new Array(numCourses).fill(0) 
        const graph = new Array(numCourses).fill(0).map(() => []) 

        for (const [after, must] of prerequisites) {
            indegree[after] ++ 
            graph[must].push(after)
        } 

        let q = [] 
        for (let i = 0; i < indegree.length; i ++) {
            if (indegree[i] === 0) {
                q.push(i)
            }
        } 

        let head = 0  
        let count = 0
        let result = [] 
        while(head < q.length) {
            const course = q[head ++] 
            result.push(course) 
            count ++ 
            for (const nei of graph[course]) {
                indegree[nei] --  
                if (indegree[nei] === 0) {
                    q.push(nei)
                }
            }
        } 

        return count === numCourses ? result : []
    }
}
