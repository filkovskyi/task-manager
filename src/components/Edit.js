import React, {Component} from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeVolume = this.onChangeVolume.bind(this);
    this.onChangeBadge = this.onChangeBadge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      personName: '',
      volume: '',
      type:''
    }
  }

  onChangePersonName(e) {
    this.setState({
      personName: e.target.value
    });
  }

  onChangeVolume(e) {
    this.setState({
      volume: e.target.value
    })
  }

  onChangeBadge(e) {
    this.setState({
      type: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.personName}, ${this.state.volume}, and ${this.state.type}`);

    this.setState({
      personName: '',
      volume: '',
      type: ''
    })
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Edit New Task</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Edit Person Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.personName}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Edit volume(ft): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.volume}
              onChange={this.onChangeVolume}
            />
          </div>
          <div className="form-group">
            <label>Edit type: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeBadge}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit Task" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
