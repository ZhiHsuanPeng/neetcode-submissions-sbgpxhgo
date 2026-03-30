class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxEnding = nums[0]
        maxResult = nums[0]

        for num in nums[1:]:
            maxEnding = max(num, maxEnding + num)
            maxResult = max(maxResult, maxEnding)

        return maxResult