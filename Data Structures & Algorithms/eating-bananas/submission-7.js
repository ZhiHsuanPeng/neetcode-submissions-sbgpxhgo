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
            let mid = l + Math.floor((r - l) / 2) 
            let hours = 0 

            for (const pile of piles) {
                hours = hours + Math.ceil(pile / mid)
            } 

            if (hours <= h) {
                r = mid - 1 
                min = Math.min(min, mid)
            } else {
                l = mid + 1
            }
        } 

        return min 
    }
}
