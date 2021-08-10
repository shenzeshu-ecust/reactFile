// let nums = [0,1,0,1,2,1]
// let p0 = 0
// let p2 = nums.length -1
// const swap = function(nums,i,j) {
//     console.log('p2 is',j); // 5
//     let tmp = nums[i]
//     nums[i] = nums[j]
//     nums[j] = tmp
    
// }
// for(let i = 0;i<=p2;i++) {
//     while (i <= p2 && nums[i] === 2)  {
//         console.log('---',nums);
//         swap(nums, i, p2--) // 先和5互换，再减1
//         console.log('now p2 is',p2); // 4
//         console.log('----互换后----',nums);
//     };
//     console.log('next?');
//     if(nums[i] === 0) {
//         swap(nums,i,p0++)
//     }
// }
// console.log(nums);
var quicksort = function(arr){
    var length = arr.length;
    if(arr.length < 2){
        return arr;
    }
    var leftArr = [];
    var rightArr = [];
    var pointIndex = parseInt(length/2);
    var point = arr[pointIndex];
    for(var i = 0;i < length;i++){
        if(i === pointIndex){
            continue;
        }
        if(arr[i] < point){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    return quicksort(leftArr).concat(point,quicksort(rightArr));

};
// function sort(arr,left,right){
//     if(left>=right){
//         return
//     } // 不能少  //如果左边的索引大于等于右边的索引说明整理完毕
//     let pivot=arr[left]
//     let i=left
//     let j=right
//     while(i<j){
//         while(i<j&&arr[j]>=pivot) j--; // 右边开始 大于等于基准值 不交换位置。
//         while(i<j&&arr[i]<=pivot) i++  // 左边 如果小于基准值 不交换位置
//         if(i<j){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
      
//     }
//     let temp=arr[i]
//     arr[i]=arr[left]
//     arr[left]=temp
//     sort(arr,left,i-1);
//     sort(arr,i+1,right);
// }
// let nums = [1,4,2,4,6,3,7]
// sort(nums,0,6)
// console.log(nums);
// let arr = [9,6,7,5,0,2,1]
// console.log(quicksort(arr));

function quickSort(arr, start, end) {
    if (start > end) {
        return;
    }
    let i = start,
        j = end,
        pivot = arr[start]; //存放基准数
    while (i !== j) {
        // 从右边开始，找第一个小于基准的位置
        while (arr[j] >= pivot && i < j) {
            j--;
        }
        // 从左边开始，找第一个大于基准的位置
        while (arr[i] <= pivot && i < j) {
            i++
        }
        // 交换两个数
        if (i < j) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    // 最后把基准数归位
    arr[start] = arr[i];
    arr[i] = pivot;
    // 递归处理左边
    quickSort(arr, start, i - 1);
    // 递归处理右边
    quickSort(arr, i + 1, end);
}
function quickSortNew(arr,left,right) {
    if(left > right) return
    let i = left
    let j = right
    let pivot = arr[left]
    while(i!==j) {
        while(i<j && arr[j]>=pivot) j--
        while(i<j && arr[i]<=pivot) i++
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    arr[left] = arr[i]
    arr[i] = pivot
    quickSortNew(arr,left,i-1)
    quickSortNew(arr,i+1,right)


}
var arr222 = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
quickSortNew(arr222, 0, arr222.length - 1);
console.log(arr222);