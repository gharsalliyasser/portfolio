import React, { Component } from 'react';
export default class Projects extends Component {
  render() {
    let Projects = this.props.resumeData;
    return (
      <section id="Projects">
                         <h1>devchallenges buttons component REACT</h1>
                         <img className="profile-pic"  src="images/btn.png" alt="" />
                       {/* <img className="profile-pic"  src="images/profilepic.jpg" alt="" /> 

                         <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

                         <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
                         

                         <img className="profile-pic"  src="iimages/profile.jpg" alt="" />
                         
                         <img className="prfile-pc" src="images/profile.jpg" alt=" " />  */}
        
      </section>
    );
  }
}