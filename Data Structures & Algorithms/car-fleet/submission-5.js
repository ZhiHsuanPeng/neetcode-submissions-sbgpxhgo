class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) { 
       const positionAndSpeed = position.map((val, index) => [val, speed[index]])
            .sort((a, b) => b[0] - a[0]); // Sort by position descending

        let fleets = 0;
        let lastTime = 0;

        for (const [pos, spd] of positionAndSpeed) {
            const time = (target - pos) / spd;
            if (time > lastTime) {
                fleets++;
                lastTime = time;
            }
            // If time <= lastTime, car joins the existing fleet
        }

        return fleets;
    }
}
