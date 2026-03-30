class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let time = position.map((val, i) => [val, speed[i]])
        time = time.sort((a, b) => b[0] - a[0])

        let curTimeToReach = 0;
        let count = 0;
        for (let i = 0; i < time.length; i ++) {
            let timeNeeded = (target - time[i][0]) / time[i][1]
            if (timeNeeded > curTimeToReach) {
                curTimeToReach = timeNeeded
                count ++
            }
        }

        return count
    }
}
