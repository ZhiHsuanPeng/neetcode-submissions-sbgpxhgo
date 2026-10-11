class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        arr = [] 
        for i in range(2):  
            for d in nums:  
                arr.append(d)  
        return arr
