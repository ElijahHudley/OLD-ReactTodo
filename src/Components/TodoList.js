import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
  deleteTodoList(id){
    console.log('deleteTodoList');
    this.props.onDelete(id);
  }

  render() {
    console.log('TodoList', this.props);

    let todoListItems = [];

    if(this.props.todos){
      todoListItems = this.props.todos.map(list => {
        console.log('todoLists', list);
        return (<TodoListItem key={list.title} list={list} />);
      });
    }

    return (
        <div className="todoList">
          {/* <h3>Todo List</h3>
          {todoListItems} */}
        </div>
    );
  }
}

TodoList.propTypes = {
  todoLists: PropTypes.array,
  onDelete: PropTypes.func
};

export default TodoList;
