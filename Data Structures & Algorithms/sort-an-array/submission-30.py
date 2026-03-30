class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        
        def merge(arr, l, r, m): 
            left = arr[l : m + 1] 
            right = arr[m + 1: r + 1]

            i = 0 
            j = 0 
            k = l 

            while i < len(left) and j < len(right): 
                if left[i] < right[j]: 
                    arr[k] = left[i] 
                    i += 1 
                else: 
                    arr[k] = right[j] 
                    j += 1

                k += 1 

            while i < len(left): 
                arr[k] = left[i] 
                i += 1 
                k += 1 

            while j < len(right): 
                arr[k] = right[j] 
                j += 1 
                k += 1 


        def merge_sort(arr, l, r): 
            if l >= r: 
                return 

            m = (l + r) // 2 
            merge_sort(arr, l, m) 
            merge_sort(arr, m + 1, r) 
            merge(arr, l, r, m) 

        merge_sort(nums, 0, len(nums) - 1) 
        return nums