class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let num in numbers) {
            for(let num2 in numbers) {
                if(numbers[num] + numbers[num2] == target) {
                    return [Number(num)+ 1, Number(num2)+1]
                }
            }
        }
        return[]
    }
}
