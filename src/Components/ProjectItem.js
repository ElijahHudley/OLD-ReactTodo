import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id){
    console.log('deleteProject');
    this.props.onDelete(id);
  }

  render() {
    console.log('ProjectItem', this.props);

    return (
        <div className="midsection">
          <div className="project-item">
          <div className="category"><b>{this.props.project.category}</b></div> 
          <div className="title">&nbsp; - {this.props.project.title} </div>
          <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
          </div>
        </div>
    );
  }
}

ProjectItem.propTypes = {
  projects: PropTypes.object,
  onDelete: PropTypes.func
};

export default ProjectItem;
