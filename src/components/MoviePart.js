import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 ">
        <div className="card">
          <div>
            <img className="image" src={this.props.img} alt={this.props.name} />
          </div>
          <div className="card-body">
            <h2>{this.props.name}</h2>
            <h5>{this.props.release_dates}</h5>
            <h5>{this.props.running_time}</h5>
            <h5>{this.props.language}</h5>

            <button>
              <a href="#" className="btn btn-lg">
                Play
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamMember;
