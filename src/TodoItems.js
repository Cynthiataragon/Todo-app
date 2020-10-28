import { render } from "@testing-library/react";
import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoItems extends Component{
    createTasks(item){
    return <li key = {item.key}>{item.text}</li>
    }


render () {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
    <ul className = "theList">{listItems}</ul>
    );
}
};

export default TodoItems;