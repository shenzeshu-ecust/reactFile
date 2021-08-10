/**该文件用于创建一个为Count组件服务的reducer 
 * reducers 纯函数
 * 本质就是一个函数
 * 接收两个参数（preState,action）
 */
function countReducer(preState,action) {
    // 从action对象中 获取：type、 data
    const {type,data} = action
    // 根据type决定如何让加工数据
    switch (type) {
        case 'increment':
            return preState+data
        case 'decrement':
            return preState-data    
        default:
            break;
    }
}