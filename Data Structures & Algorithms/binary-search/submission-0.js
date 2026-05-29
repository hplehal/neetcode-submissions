class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
      let left = 0;
      let right = nums.length - 1;

      while(left <= right) {
        const ptr = left + Math.floor((right - left)/2);
        if(nums[ptr] > target) {
            right = ptr - 1;
        } else if (nums[ptr] < target){
            left = ptr + 1;
        } else {
            return ptr;
        }
      }
    return -1;
    }
}
