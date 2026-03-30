class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) { 
        let l = 1 
        let r = Math.max(...piles)  
        let res = r

        while(l <= r) {
            let mid = Math.floor((r + l) / 2) 
            
            let need = 0 
            for (const pile of piles) {
                need += Math.ceil(pile / mid)
            } 

            if (need <= h) {
                res = Math.min(mid, res) 
                r = mid - 1
            } else {
                l = mid + 1
            }
        } 

        return res
    }
}
