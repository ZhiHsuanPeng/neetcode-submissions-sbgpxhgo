class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1; 
        let r = Math.max(...piles);
        let res = r;

        while(l <= r) {
            let m = Math.floor(( l + r ) / 2);

            let total = 0;

            for (const p of piles) {
                total += Math.ceil( (p / m) )
            }

            if (total <= h) {
                res = m;
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return res
    }
}
