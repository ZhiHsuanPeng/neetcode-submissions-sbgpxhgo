class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {  
        let pre = new Array(nums.length).fill(1) 

        for (let i = 1; i < nums.length; i ++) {
            pre[i] = pre[i - 1] * nums[i - 1]
        }  

        let post = 1 
        for (let i = pre.length - 2; i >= 0; i --) {
            post *= nums[i + 1] 
            pre[i] *= post
        } 

        return pre
    }
}
