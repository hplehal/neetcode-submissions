class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicateChecker = {};
        for(let i = 0; i < nums.length; i++) {
            console.log(nums[i]);
            duplicateChecker[nums[i]] = (duplicateChecker[nums[i]] || 0) + 1;
            console.log(duplicateChecker[nums[i]])
        }
        for(let key in nums) {
            if(duplicateChecker[nums[key]] > 1) {
                return true;
            }
        }
        return false;
    }
}
