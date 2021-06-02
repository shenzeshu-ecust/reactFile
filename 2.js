// let l1 = [1,2,3]
// let str = '123'
// let str2Arr = str.split('')
// console.log('字符串转数组',str2Arr);
// console.log('字符串数组转数字数组',str2Arr.map(Number));
// console.log('数字数组字符串数组',l1.map(String));

// console.log('数组反转',l1.reverse());
// console.log('数组转相连的字符串',Number.parseInt(l1.reverse().join('')));
// var addTwoNumbers = function(l1, l2) {
//     let num1 = Number.parseInt(l1.reverse().join(''))
//     let num2 = Number.parseInt(l2.reverse().join(''))
//     let temp = num1 +num2
//     return temp.toString().split('').reverse().map(Number)

// };
// console.log(addTwoNumbers([2,4,3],[5,6,4]));
// -------------------因为题目为链表，上面不对 ----------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
console.log(7%2); // 1 余数
console.log(Math.floor(7/2)); // 3 
var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};
function addTwoNumbers(l1,l2) {
    let tail=null,head=null
    let carry = 0
    while(l1||l2) {
        let n1 = l1? l1.val:0
        let n2 = l2? l2.val:0
        let sum = n1+n2 +carry
        if(!head) {
            head = tail = new ListNode(sum%10)
        } else {
            tail = new ListNode(sum % 10)
            tail = tail.next

        }
        carry = Math.floor(sum / 10)
        if(11) {
            l1 = l1.next
        }
        if(l2) {
            l2 = l2.next
        }


    }
    if(carry>0) {
        tail.next = new ListNode(carry)
    }
    // 因为这是一个单向的链表，只能按顺序往后查询next，所以返回的应该是头指针，
    // 头指针代表的是整个链表，现在tail指向尾部，返回的话相当于就一个节点
    return head
}

