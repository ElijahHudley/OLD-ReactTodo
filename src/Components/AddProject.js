import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class AddProjects extends Component {
  constructor(){
    super();

    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['web', 'mobile']
  }

  handleSubmit(e){
    e.preventDefault()

    if(this.refs.title.value === ''){
      alert('need title');
    }else{
      this.setState({newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject);

      });
    }
  }

  render() {
    console.log('AddProjects', this.props);
    let categoryOptions = this.props.categories.map(category =>
    {return <option key={category} value={category}>{category}</option> })

    let projectItems = [];

    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        console.log('projects', project);
        return (<ProjectItem key={project.title} project={project} />);
      });
    }


    return (
      <div className="add-form">
        <div className="midsection">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='add add-project-form'>
              <label>Title: </label>
              <input type="text" ref="title"/>
              <br/>
            </div>

            <div className='add add-category-form'>
              <label>Category: </label>
                <select ref="category">
                  {categoryOptions}
                </select>
            </div>

            <div className='add add-submit-form'>
              <input type="submit" value="submit"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddProjects.AddProjects = {
  categories: PropTypes.array,
  addProject: PropTypes.func
};


export default AddProjects;
