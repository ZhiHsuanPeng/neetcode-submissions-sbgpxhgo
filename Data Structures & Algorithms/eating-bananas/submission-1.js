class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let result = r;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            let totalTime = 0;

            for (const p of piles) {
                totalTime += Math.ceil( p / m )
            }

            if (totalTime > h) {
               l = m + 1
            } else if (totalTime <= h) {
                result = m
                r = m - 1
            }
        }

        return result
    }
}
