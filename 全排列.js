function fullpermutate(str) {
    var result = [];
    if (str.length > 1) {
        //遍历每一项
        for (var m = 0; m < str.length; m++) {
            //拿到当前的元素
            var left = str[m];
            //除当前元素的其他元素组合
            var rest = str.slice(0, m) + str.slice(m + 1, str.length);
            //上一次递归返回的全排列
            var preResult = fullpermutate(rest);
      
            //组合在一起
            for (var i = 0; i < preResult.length; i++) {
                var tmp = left + preResult[i]
                result.push(tmp);
            }
        }
    } else if (str.length == 1) {
        result.push(str);
    }
    return result;
}
// console.log(fullpermutate('abc'));

function fullpermutateMine(str) {
    let ans = []
    if(str.length === 1) {
        ans.push(str)
    }
    for(let i = 0;i<str.length;i++) {
        let left = str[i]
        let rest = str.slice(0,i) + str.slice(i+1)
        let tmp = fullpermutateMine(rest)
        for(let j = 0; j < tmp.length; j++) {
            ans.push(left + tmp[j])
        }
    }
    return ans
}
console.log(fullpermutateMine('abc'))
// 数组形式的
var permute = function(nums) {
    const res = [], path = [];
    backtracking(nums, nums.length, []);
    return res;
    
    function backtracking(n, k, used) {
        if(path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < k; i++ ) {
            if(used[i]) continue;
            path.push(n[i]);
            console.log(path);
            used[i] = true; // 同支
            backtracking(n, k, used);
            path.pop();
            used[i] = false;
        }
    }
};
var permute = function(nums) {
    const res = []
    const path = []
    const used = new Array(nums.length).fill(false)
  
    backrack(path, used)
  
    function backrack(path, used) {
      console.log(path)
      if(path.length === nums.length) {
        res.push(path.slice())
      }
  
      for(let i = 0; i < nums.length; i++) {
        if(used[i]) { 
          continue 
        }
        used[i] = true
        path.push(nums[i])
        backrack(path, used)
        path.pop()
        used[i] = false
      }
    }
  
    return res
  };
console.log('====================================');
console.log(permute([1,2,3]));
console.log('====================================');