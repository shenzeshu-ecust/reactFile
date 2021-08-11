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
function quanpailie(str) {
    let ans = []
    if(str.length>1) {
        for(let i = 0;i<str.length;i++) {
            let left = str[i]
            let rest = str.slice(0,i) + str.slice(i+1)
            let preRes = quanpailie(rest)
            for(let j = 0;j<preRes.length;j++) {
                ans.push(left + preRes[j])
            }
        }
    } else if(str.length == 1) {
        ans.push(str)
    }
    return ans
}
console.log(quanpailie('abc'))