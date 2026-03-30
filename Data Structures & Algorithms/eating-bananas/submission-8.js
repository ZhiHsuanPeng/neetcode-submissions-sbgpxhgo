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
            let time = 0
            for (const pile of piles) {
                time += Math.ceil(pile / mid)
            } 

            if (time <= h) {
                min = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        } 

        return min
    }
}
