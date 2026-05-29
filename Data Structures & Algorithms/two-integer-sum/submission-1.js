class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};

        for(let i =0; i< nums.length; i++) {
            if(obj.hasOwnProperty(target - nums[i])) {
               console.log();
               return [i,obj[target-nums[i]]];
            } else {
                obj[nums[i]] = i;
            }
        }
    }
}
