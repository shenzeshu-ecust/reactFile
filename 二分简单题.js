let nums = [-1,0,3,5,9,12], target = -1
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    while(left < right) {
        let mid = left +  Math.floor((right - left) /2)
        if(nums[mid] < target) {
            left = mid +1
        } else {
            right = mid
        }
    }
    if(nums[left]== target&& (left== 0 || nums[left - 1] < target)) return left
    else return -1
};
console.log(search(nums,target));