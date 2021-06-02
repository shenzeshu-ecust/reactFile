//start不动，end向后移动
// 当end遇到重复字符，start应该放在上一个重复字符的位置的后一位，同时记录最长的长度
// 怎样判断是否遇到重复字符，且怎么知道上一个重复字符的位置？--用哈希字典的key来判断是否重复，用value来记录该字符的下一个不重复的位置。
var lengthOfLongestSubstring = function(s) {
    
};
console.log( lengthOfLongestSubstring("pwwkew") );
var lengthOfLongestSubstring = function(s) {
    /**
     *  
    var str=s[0];
    var max=1;
    if(s=='')
        return 0;
    for(var i=1;i<s.length;i++){
        if(str.indexOf(s[i])!=-1){
            str=str.slice(str.indexOf(s[i])+1);
        }
        str+=s[i]; 
        if(max<str.length)
            max=str.length;
    }
    return max;
     */
    // 滑动窗口初始化为一个空数组

    let arr = [];
    // 要返回的字符串的长度
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      // 使用 indexOf 判断是否在数组中出现过
      let index = arr.indexOf(s[i])
      // 如果出现过
      if (index !== -1) {
        // 从数组开头到当前字符串全部截取掉
        arr.splice(0, index + 1);
      }
      // 在窗口右边放进新的字符
      arr.push(s.charAt(i));
      // 更新下最大值
      max = Math.max(arr.length, max);
    }
    // 返回
    return max;
  };
  let lengthOfLongestSubstring = function(s) {
      /**
       * map(k,v) -- k字符、v字符位置
       */
       let map = new Map()
       let result = 0, count = 0, i = 0
       while (i < s.length) {
           if (!map.has(s[i])) { //如果没有这个字符，加入哈希表
               map.set(s[i], i)
               count++
               i++
           } else { //如果有这个字符
               if (result < count) result = count
               i = map.get(s[i]) + 1   //从重复字符的索引下一位开始继续循环
               map.clear() //清空哈希表重复利用
               count = 0   //重置count
           }
       }
       return result < count ? count : result  //最后这里再判断一下防止直接在if条件中结束循环 result未被赋新值的情况
  }
  
