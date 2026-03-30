class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let time = position.map((n,i) => [n, (target - n) / speed[i]]);
        time = time.sort((a, b) => b[0] - a[0]);

        let ttTarget = new Array(position.length);
        let result = 0
        for (let i = 0; i < ttTarget.length; i ++) {
            ttTarget[i] = time[i][1];

            if (i >= 0 && ttTarget[i - 1] >= ttTarget[i]) {
                ttTarget[i] = ttTarget[i - 1]
            } else {
                result ++
            }
        }

        return result
        
    }
}
