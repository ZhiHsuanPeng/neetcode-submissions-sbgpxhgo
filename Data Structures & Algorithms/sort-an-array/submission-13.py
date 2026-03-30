import random

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def swap(arr, l, r): 
            arr[l], arr[r] = arr[r], arr[l] 

        def partition(arr, l, r):
            pivot_idx = random.randint(l, r)  # only change
            swap(arr, pivot_idx, r)           # move pivot to end

            pivot = arr[r]  
            i = l - 1 

            for j in range(l, r): 
                if arr[j] < pivot: 
                    i += 1 
                    swap(arr, i, j) 

            swap(arr, i + 1, r) 
            return i + 1 

        def quick_sort(arr, l, r): 
            if l >= r: 
                return 

            p = partition(arr, l, r) 
            quick_sort(arr, l, p - 1) 
            quick_sort(arr, p + 1, r) 

        quick_sort(nums, 0, len(nums) - 1) 
        return nums

            
