let AllSkills = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit() {
    console.log('you are in edit');
  },

  removeSkillFromDOM(id) {
    var newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

    this.setState({ skills: newSkills });
  },

  onUpdate(skill) {
    this.props.handleUpdate(skill);
  },

  render() {
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <Skill skill={skill}
                 handleDelete={this.handleDelete.bind(this, skill.id)}
                 handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return (
      <div>
        {skills}
      </div>
    )
  }
});