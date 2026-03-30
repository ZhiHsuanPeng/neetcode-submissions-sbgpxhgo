class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) { 
        intervals.push(newInterval)  
        intervals.sort((a, b) => a[0] - b[0])

        let merged = [intervals[0]] 
        
        for (let i = 1; i < intervals.length; i ++) {
            const [start, end] = intervals[i]  
            const lastMergerd = merged[merged.length - 1]
            if (start <= lastMergerd[1]) {
                lastMergerd[1] = Math.max(end, lastMergerd[1])
            } else {
                merged.push(intervals[i])
            }
        } 

        return merged
    }
}
