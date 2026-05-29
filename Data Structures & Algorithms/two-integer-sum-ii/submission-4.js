class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // for (let num in numbers) {
        //     for(let num2 in numbers) {
        //         if(numbers[num] + numbers[num2] == target) {
        //             return [Number(num)+ 1, Number(num2)+1]
        //         }
        //     }
        // }
        // return[]

        // Two Pointer

        let left = 0;
        let right = numbers.length - 1;

        while(left < right) {
            let currentSum = numbers[left] + numbers[right];
            if(currentSum > target){
                right--;
            } else if(currentSum < target){
                left++;
            } else {
                return [left + 1, right + 1];
            }
            
        }
        return[]
    }
}
