class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0)
        const stack = []
        for (let i = 0; i < temperatures.length; i ++) {
            let cur = temperatures[i]
            while(stack.length > 0 && stack[stack.length - 1][0] < cur) {
                const [ temp, index ] = stack.pop()
                result[index] = i - index
            }

            stack.push([cur, i])
        }

        return result
    }
}
