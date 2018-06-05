import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id){
    console.log('deleteProject');
    this.props.onDelete(id);
  }

  render() {
    console.log('Projects', this.props);

    let projectItems = [];

    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        console.log('projects', project);
        return (<ProjectItem key={project.id} project={project} onDelete={this.deleteProject.bind(this)}/>);
      });
    }

    return (
      <div className="projects">
      {projectItems}
      {this.props.test}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
};

export default Projects;
