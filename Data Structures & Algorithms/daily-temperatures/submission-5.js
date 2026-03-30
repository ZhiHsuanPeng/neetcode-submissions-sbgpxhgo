class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let r = 0; r < temperatures.length; r ++) {
            let cur = temperatures[r];
            while(stack.length > 0 && cur > stack[stack.length - 1][1]) {
                const [index, temp] = stack.pop();
                result[index] = r - index
            }

            stack.push([r, cur])
        }

        return result;
    }
}
