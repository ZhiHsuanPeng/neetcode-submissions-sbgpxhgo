class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        numSet = set(nums)  
        res = []

        def dfs(i, cur): 
            if i == len(nums): 
                res.append(cur.copy()) 
                return 

            for num in list(numSet):
                cur.append(num)
                numSet.remove(num)

                dfs(i + 1, cur)

                cur.pop()
                numSet.add(num)

        dfs(0, []) 
        return res