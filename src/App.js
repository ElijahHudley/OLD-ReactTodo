import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import TodoList from './Components/TodoList';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  getProjects(){
    console.log('getToDoList');
    this.setState({projects: [
      {title: 'business', category: 'web', id:uuid.v4()},
      {title: 'social', category: 'mobile', id:uuid.v4()},
      {title: 'ecom', category: 'web', id:uuid.v4()},
    ]});

  }

  getToDoList(){
    console.log('getToDoList');
    var root = 'https://jsonplaceholder.typicode.com/todos';

    this.setState({todos: []});

    $.ajax({
      url: root, // + '/posts/1',
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: function(data){
        console.log('getToDoList success');
        this.setState({projects: data}, function(){
          console.log('setState todos', this.state);

        });
      }.bind(this),
      error: function(xhr, statue, error){
        console.log('getToDoList error', xhr, statue, error);
      }
    });
  }

  //fires everytime component re-rendered
  componentWillMount(){
    this.getProjects();
    console.log('componentWillMount', this.state);
  }

  componentDidMount(){
    this.getProjects();
    this.getToDoList();
    console.log('componentDidMount', this.state);
  }

  handleAddProject(project){
    project['id'] = uuid.v4();

    console.log('handleAddProject', project);

    let projects = this.state.projects;
    projects.unshift(project); 
    this.setState({newProject: {
      title: '',
      category: 0
    }});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    var index = 0;

    for(var c in projects){
      if(projects[c].id === id){
        index=c;
        break;
      }else{
        index = -1;
      }
    }
 
    //let index = projects.findIndex(x => x.id);
    console.log('handleDeleteProject', index, id);

    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App grid">
      <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <TodoList todos={this.state.todos} /> 
      </div>
    );
  }
}

export default App;
