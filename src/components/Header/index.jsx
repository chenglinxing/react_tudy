import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    //判断是否是回车按键
    if (keyCode !== 13) return;
    //添加todo的名字不能为空
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    //准备添加后的todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    //清空输入
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
