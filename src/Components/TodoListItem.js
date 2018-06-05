import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {

  deleteTodoList(id){
    console.log('deleteTodoList');
    this.props.onDelete(id);
  }

  render() {
    console.log('TodoListItem', this.props);

    return (
      <li className="TodoListItem">
        <b>{this.props.list.title}</b> - {this.props.list.category} / <button>X</button>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  projects: PropTypes.object,
  onDelete: PropTypes.func
};

export default TodoListItem;
