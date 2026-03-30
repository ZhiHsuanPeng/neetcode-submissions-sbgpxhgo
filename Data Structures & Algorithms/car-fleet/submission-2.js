class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        position = position.map((p,i) => [p, speed[i]]).sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let timeLine = 0;
        for (let i = 0; i < position.length; i ++) {
            let [p, speed] = position[i];
            let curTime = (target - p) / speed;

            if (curTime > timeLine) {
                timeLine = curTime
                fleets ++
            }
        }

        return fleets
    }
}
