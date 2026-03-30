class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) { 

        let stack = []  

        let res = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i ++) {
            let cur = temperatures[i] 

            while(stack.length > 0 && temperatures[stack[stack.length - 1]] < cur) {
                const index = stack.pop() 
                res[index] = i - index
            } 

            stack.push(i)
        } 

        return res
    }
}
