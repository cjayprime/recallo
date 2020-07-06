import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import Button from "../../components/Button/button";
import { Link } from 'react-router-dom';


class ProfileCall extends Component {
  constructor() {
    super();
    this.state = {
      showMenuCard: false,
    };
  }

  show() {
    const { showMenuCard } = this.state;
    this.setState({
      showMenuCard: !showMenuCard,
    });
  }

  render() {
    const { open, toggle } = this.props;
    const { showMenuCard } = this.state;

    return (
      <Overlay open={open} toggle={toggle} width="90rem">
        <div id="profilecallContainer">
              <Link to="#" className="callviewHeader"> 
          Call Profile
          </Link>

          <Link to="#" className="callviewHeader2"> 
          Call Event
          </Link><br/><br/>
        <hr/>
        <br/><br/>
   
          <h4 className="mb-8">Profiled call from +2348051113453</h4>
          <h6 className="light text-light mb-32">Edit call details</h6>
          <div className="mb-32 flex">
            <div className="flex-1">
              <div className="background-grey flex view-profile-table">
                <h6 className="text-light flex-1 light">Call ID</h6>
                <h6 className="flex-3" id="profilecalsubtext">+2348051113453</h6>
              </div>
              <div className="flex view-profile-table">
                <h6 className="text-light flex-1 light">Personnel</h6>
                <h6 className="flex-3" id="profilecalsubtext">Grace Audu</h6>
              </div>
              <div className="background-grey flex view-profile-table">
                <h6 className="text-light flex-1 light">Date Time</h6>
                <h6 className="flex-3" id="profilecalsubtext">22-01-2020 12:03:pm</h6>
              </div>
              <div className="flex view-profile-table">
                <h6 className="text-light flex-1 light">Duration</h6>
                <h6 className="flex-3" id="profilecalsubtext">3mins 2secs</h6>
              </div>
              <div className="background-grey flex view-profile-table">
                <h6 className="text-light flex-1 light">Status</h6>
                <h6 className="flex-3" id="profilecalsubtext">Answered</h6>
              </div>
              <div className="flex view-profile-table">
                <h6 className="text-light flex-1 light">Age group</h6>
                <h6 className="flex-3" id="profilecalsubtext">Youth</h6>
              </div>
              <div className="background-grey flex view-profile-table">
                <h6 className="text-light flex-1 light">Gender</h6>
                <h6 className="flex-3" id="profilecalsubtext">Female</h6>
              </div>
            </div>
            <div className="flex-1 ml-35">
              <div className="flex">
                <div>
                  
                  <h6 className="text-light flex-1 light">Select age group</h6>
                  <label htmlFor="teenager" className="profile-call-label mt-16 cursor bold">
                    
                    <input type="radio" id="radioInput" name="radio" />
                    Teenager
                    
                    {/*<span className="checkmark" />*/}

                  </label>
                  <label htmlFor="youth" className="profile-call-label mt-16 cursor bold">
                    
                    <input type="radio" id="radioInput" name="radio" />
                    Youth
                  </label>
                  <label htmlFor="adult" className="profile-call-label mt-16 cursor bold">
                    
                    <input type="radio" id="radioInput" name="radio" />
                    Adult
                    {/*<span className="checkmark" />*/}
                  </label>
                  <label htmlFor="elder" className="profile-call-label mt-16 cursor bold">
                    
                    <input type="radio" id="radioInput" name="radio" />
                    Elder
                    {/*<span className="checkmark" />*/}
                  </label>
                </div>
                <div className="ml-35">
                  <h6 className="text-light flex-1 light">Select gender</h6>
                  <label htmlFor="male" className="profile-call-label mt-16 cursor bold">
                   
                    <input type="radio" id="radioInput" name="gender" />
                    Male
                    {/*<span className="checkmark" />*/}
                  </label>
                  <label htmlFor="female" className="profile-call-label mt-16 cursor bold">
                    
                    <input type="radio" id="radioInput" name="gender" />
                    Female
                    {/*<span className="checkmark" />*/}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-32 flex">
            <div className="flex-1">
              <div className="row-direction profile-category-card">
                <div className="p-16">
                  <h6 className="light text-light mb-16">Select Category</h6>
                  <h5
                    className="mb-8 cursor text-blue hover"
                    onClick={(e) => this.show(e)}
                  >
                    Enquiry
                    <span className="arrow-down ml-8" />
                  </h5>
                  {showMenuCard ? (
                    <div className="menu-card" style={{ marginTop: 0 }}>
                      <h6 className="text-blue light cursor hover-grey">
                        Enquiry
                      </h6>
                      <h6 className="text-blue light cursor hover-grey">
                        Complaints
                      </h6>
                      <h6 className="text-blue light cursor hover-grey">
                        Request
                      </h6>
                      <h6 className="text-blue light cursor hover-grey">
                        Engine fault
                      </h6>
                    </div>
                  ) : null}
                  <h6 className="light text-light">
                    Caller raised an issue about engine
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex-1 ml-35" />
            <div style={{marginLeft:540, marginTop:40, position:"absolute"}}>
            <audio style={{width:250}} className="audioPlayer" autoPlay controls loop>
                    <source src="#" type="audio/mpeg" />
                  </audio>
            </div>
          </div>
          <div className="mb-32">
            <h6 className="light text-light mb-8">Add Comments</h6>
            <div className="row-direction profile-category-card mb-16 ">
              <div className="p-16">
                <h6 className="light text-light">
                  Caller mentioned a desire to be able to switch mechanics as
                  often as possible
                </h6>
              </div>
            </div>
          </div>
          <div className="mb-32 row pt-30">
            <div>
              <Button
                className="br-30 mr-16"
                padding="11px 32px"
                background="var(--text-color)"
                text="#fff"
              >
                <h6>Save Profile</h6>
              </Button>
              <Button
                className="br-30"
                padding="11px 32px"
                background="background-grey"
                text="var(--text-color)"
              >
                <h6>Profile Next Call</h6>
              </Button>
            </div>
            <h6 className="bold text-light cursor" onClick={toggle}>
              Close
            </h6>
          </div>
        </div>
      </Overlay>
    );
  }
}

export default ProfileCall;
