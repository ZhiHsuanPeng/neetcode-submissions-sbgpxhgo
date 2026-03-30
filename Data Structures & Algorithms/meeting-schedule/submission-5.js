/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) { 
        intervals.sort((a, b) => a.start - b.start) 
        console.log(intervals)
        for (let i = 0; i < intervals.length - 1; i ++) {
            let cur = intervals[i] 
            let nxt = intervals[i + 1]  

            if (cur.end > nxt.start) {
                return false
            }
        } 

        return true
    }
}
