import random

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def swap(arr, l, r):
            arr[l], arr[r] = arr[r], arr[l] 

        def partition(arr, l, r): 
            index = random.randint(l, r)
            swap(arr, index, r) 
            pivot = arr[r] 

            i = l - 1 
            for j in range(l, r): 
                if arr[j] < pivot: 
                    i += 1 
                    swap(arr, i, j) 

            i += 1 
            swap(arr, i, r) 
            return i 

        def quick_sort(arr, l, r): 
            if l >= r: 
                return 

            p = partition(arr, l, r) 
            quick_sort(arr, l, p - 1) 
            quick_sort(arr, p + 1, r) 

        quick_sort(nums, 0, len(nums) - 1) 
        return nums
