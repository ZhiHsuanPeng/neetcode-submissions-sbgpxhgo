class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) { 
        intervals.sort((a, b) => a[0] - b[0]) 

        let merged = [intervals[0]] 

        for (let i = 1; i < intervals.length; i ++) {
            let [start, end] = intervals[i] 
            let lastMerged = merged[merged.length - 1]
            if (start <= lastMerged[1]) {
                lastMerged[1] = Math.max(lastMerged[1], end)
            } else {
                merged.push(intervals[i])
            }
        }  

        return merged
    }
}
