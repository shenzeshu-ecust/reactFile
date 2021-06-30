import React, { PureComponent } from "react";
// import { Component } from 'react';
import "./index.css";

// Component 有两个问题
// 1 只要执行setState()即使不改变状态数据，也会重新render()
// 2 只要当前组件重新render，就会自动render子组件 （即使子组件没用到父组件数据）--- > 效率低
//     效率高的做法： 只有当组件的state 或props 数据发生改变的时候才重新render
// 原因 component中的生命周期函数  shouldComponentUpdate()总是返回true
class Demo extends PureComponent {
  state = { username: "JACK", stus: ["小鲤鱼", "小鲸鱼", "小黑鱼"] };
  change = () => {
    this.setState({ username: "Tom" });
    // this.setState({}); // 即使这里 this.setState({}) 没有改变值 也会触发子组件的render
    /**
     * PureComponent 的小缺陷： 是浅比较，所以state、props不能是原来的对象
     * 错误修改state方式
     * const obj = this.state  // 这是一个浅拷贝，obj其实和原来的state一样。所以无论做什么更改 最后都是更改不成功
     * obj.username = 'Nancy'
     * console.log(obj === this.state) // true
     * this.setState({obj})
     */
  };
  addFish = () => {
    /*
            错误的增加数组元素方式
            const {stus} = this.state //依旧是一个浅拷贝
            stus.unshift('xxx')
            this.setState({stus})
        */
    //  =============  数组添加元素正确方式  =================
    const { stus } = this.state;
    this.setState({ stus: ["小金鱼", ...stus] });
  };
  /*
    1 理论上 用shouldComponentUpdate 控制更新阀门
    shouldComponentUpdate(nextProps, nextState) {
        console.log('下一个值',nextProps,nextState); // 目标props\state
        console.log('当前',this.props,this.state);
        // if(this.state.username === nextState.username) {
        //     return false
        // }
        // return true
        return !this.state.username === nextState.username
    }
    */
  /*
   2 工程上 用PureComponent 代替 Component
   这样如果有很多 props、state 也不用一个个写在shouldComponentUpdate的判断里
   */

  render() {
    console.log("demo render");
    const { username } = this.state;
    return (
      <div className="parent">
        <h3>我是Demo组件</h3>
        <h4>我的用户名：{username}</h4>
        <h4>小鱼们：{this.state.stus.join(' ')}</h4>
        <button onClick={this.change}>改变用户名</button>
        <button onClick={this.addFish}>添加小鱼</button>

        <B username={"啦啦啦"} />
      </div>
    );
  }
}
class B extends PureComponent {
  // 虽然父组件有值改变的判断了，但是如果父组件render了，由于子组件在父组件的render中，所以即使没用到父组件的值，也会render
  // 所以也需要加判断
  /*
    shouldComponentUpdate(nextProps) {
        console.log('下一个值',nextProps); // 目标props\state
        console.log('当前',this.prop);
        return !this.props.username === nextProps.username
           
      
    }
    */
  render() {
    console.log("B render");

    return (
      <div className="child">
        <h3>我是B组件</h3>
        <h4>我从Demo组件获得的用户名：{this.props.username}</h4>
      </div>
    );
  }
}
export default Demo;
