class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let min = r

        while(l <= r) {
            let mid = Math.floor((l + r) / 2)

            let total = 0
            for (const p of piles) {
                total += Math.ceil(p / mid)
            }

            if (total > h) {
                l = mid + 1
            } else {
                min = Math.min(mid, min)
                r = mid - 1
            }
        }

        return min
    }
}
