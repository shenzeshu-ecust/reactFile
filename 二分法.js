/**
 * 关于取中位数，基于此题解，我记忆的口诀是「左动取左，右动取右」，
 * 即 if (...) left = mid + 1; 归为「左动」，对应左中位数；if (...) right = mid - 1; 归为「右动」，对应右中位数。

补充一些二分查找变体（来自某客APP专栏）在此题解思路下的代码（java），辅以练习

// 查找第一个值等于给定值的元素
private int firstEquals(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l < r) {
        int mid = l + ((r - l) >> 1);
        if (arr[mid] < target) l = mid + 1;
        else r = mid; // 收缩右边界不影响 first equals
    }
    if (arr[l] == target && (l == 0 || arr[l - 1] < target)) return l;
    return -1;
}

// 查找最后一个值等于给定值的元素
private int lastEquals(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l < r) {
        int mid = l + ((r - l + 1) >> 1);
        if (arr[mid] > target) r = mid - 1;
        else l = mid; // 收缩左边界不影响 last equals
    }
    if (arr[l] == target && (l == arr.length - 1 || arr[l + 1] > target)) return l;
    return -1;
}
// 查找第一个大于等于给定值的元素
private int firstLargeOrEquals(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l < r) {
        int mid = l + ((r - l) >> 1);
        if (arr[mid] < target) l = mid + 1;
        else r = mid; // 收缩右边界不影响 first equals
    }
    if (arr[l] >= target && (l == 0 || arr[l - 1] < target)) return l; // >=
    return -1;
}
// 查找最后一个小于等于给定值的元素
private int lastLessOrEquals(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l < r) {
        int mid = l + ((r - l + 1) >> 1);
        if (arr[mid] > target) r = mid - 1;
        else l = mid; // 收缩左边界不影响 last equals
    }
    if (arr[l] <= target && (l == arr.length - 1 || arr[l + 1] > target)) return l; // <=
    return -1;
}
 */
let firstEquals = function(arr,target) {
    let left = 0
    let right = arr.length -1
    while(left < right) {
        let mid = Math.floor((left+ right)/2)
        if(arr[mid]<target) left = mid+1
        else right = mid //收缩右边界不影响 first equals
    }
    if(arr[left] == target && (left == 0 || arr[left -1] < target)) return left
    return -1
}
console.log( firstEquals([1,3,4,6,6,8],2) );