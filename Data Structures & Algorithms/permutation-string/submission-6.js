class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
     checkInclusion(s1, s2) { 
        if (s2.length < s1.length) return false;

        let targetBucket = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        // Initialize the bucket with the first window
        for (let i = 0; i < s1.length; i++) {
            targetBucket[s1.charCodeAt(i) - aCode]++;
            targetBucket[s2.charCodeAt(i) - aCode]--;
        }

        if (targetBucket.every(num => num === 0)) return true;

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            targetBucket[s2.charCodeAt(l) - aCode]++;
            targetBucket[s2.charCodeAt(r) - aCode]--;
            l++;
            if (targetBucket.every(num => num === 0)) return true;
        }

        return false;
    }
}
