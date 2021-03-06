import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import Button from "../../components/Button/button";
import FormField from "../../components/Form";
import { Link } from 'react-router-dom';
import Notification from "../../utils/notification";
import Tabs from './Tabs';


class ProfileCall extends Component {
  constructor() {
    super();
    this.state = {
      gender: 'Male',
      age: 'Youth',
      comment: '',
      current: {
        category: '',
        description: '',
        id: 0
      },
      showMenuCard: false
    };
  };

 
  componentDidUpdate(prevProps){
    const { getCategories, open, getVoiceNotes, call } = this.props;
    if(open && prevProps.open !== open){
      getCategories(data => {
        this.setState({
          current: {
            category: data.category && data.category.length ? data.category[0].category_name : '',
            description: data.category && data.category.length ? data.category[0].category_description : '',
            id: data.category && data.category.length ? data.category[0]._id : 0
          }
        });
      });
      getVoiceNotes(call.reference_no);
    }
  };

  handleChange = (value, name, error) => {
    if(name)
    this.setState({
      [name]: value,
      error,
    });
  };

 

  show() {
    const { showMenuCard } = this.state;
    this.setState({
      showMenuCard: !showMenuCard,
    });
  };

  submit = () => {
    const { profileVoiceNote, getCalls, call } = this.props;
    const {gender, age, comment, current} = this.state;
    const data = {gender, age, comment};
    const { error } = data;
    
    const dataKeys = Object.keys(data);
    if (
      !error &&
      dataKeys.filter((state) => state === "error" || !!data[state]).length === dataKeys.length
    ) {
      profileVoiceNote({
        caller_id: call.caller_id,
        // received_date:"2019-06-27",
        // received_time:"08:12:06",
        // voicenote_id:"13",
        // account: call.account,
        category: current.id,
        sex: gender,
        age_group:age,
        comment: comment
      }, () => getCalls('all'));
    } else {
      Notification.error(
        error || "Please fill in the form correctly."
      );
    }
  }

  render() {
    const { open, toggle, call, category, next } = this.props;
    const { gender, age, comment, showMenuCard, current } = this.state;

    return (
      <Overlay open={open} toggle={toggle} width="90rem">
        <div>
          <Tabs>
              <div label="Call Profile">
              <hr/>
              <div id="profilecallContainer">
        
                    <h4 className="mb-8">Profiled call from {call.caller_id}</h4>
                    <h6 className="light text-light mb-32">Edit call details</h6>
                    <div className="mb-32 flex">
                      <div className="flex-1">
                        <div className="background-grey flex view-profile-table">
                          <h6 className="text-light flex-1 light">Call ID</h6>
                          <h6 className="flex-3" id="profilecalsubtext">{call.caller_id}</h6>
                        </div>
                        <div className="flex view-profile-table">
                          <h6 className="text-light flex-1 light">Personnel</h6>
                          <h6 className="flex-3" id="profilecalsubtext">{call.personnel_name}</h6>
                        </div>
                        <div className="background-grey flex view-profile-table">
                          <h6 className="text-light flex-1 light">Date Time</h6>
                          <h6 className="flex-3" id="profilecalsubtext">{call.end_time}</h6>
                        </div>
                        <div className="flex view-profile-table">
                          <h6 className="text-light flex-1 light">Duration</h6>
                          <h6 className="flex-3" id="profilecalsubtext">{call.call_duration}</h6>
                        </div>
                        <div className="background-grey flex view-profile-table">
                          <h6 className="text-light flex-1 light">Status</h6>
                          <h6 className="flex-3" id="profilecalsubtext">{call.call_status}</h6>
                        </div>
                        <div className="flex view-profile-table">
                          <h6 className="text-light flex-1 light">Age group</h6>
                          <h6 className="flex-3" id="profilecalsubtext">{age}</h6>
                        </div>
                        <div className="background-grey flex view-profile-table">
                          <h6 className="text-light flex-1 light">Gender</h6>
                          <h6 className="flex-3" id="profilecalsubtext">{gender}</h6>
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
                              
                              <input
                                type="radio"
                                id="radioInput"
                                name="radio" 
                                checked={age === 'Youth'}
                                onChange={() => this.setState({age: 'Youth'})}
                              />
                              Youth
                            </label>
                            <label htmlFor="adult" className="profile-call-label mt-16 cursor bold">
                              
                              <input
                                type="radio"
                                id="radioInput"
                                name="radio" 
                                checked={age === 'Adult'}
                                onChange={() => this.setState({age: 'Adult'})}
                              />
                              Adult
                              {/*<span className="checkmark" />*/}
                            </label>
                            <label htmlFor="elder" className="profile-call-label mt-16 cursor bold">
                              <input
                                type="radio"
                                id="radioInput"
                                name="radio" 
                                checked={age === 'Elder'}
                                onChange={() => this.setState({age: 'Elder'})}
                              />
                              Elder
                              {/*<span className="checkmark" />*/}
                            </label>
                          </div>
                          <div className="ml-35">
                            <h6 className="text-light flex-1 light">Select gender</h6>
                            <label htmlFor="male" className="profile-call-label mt-16 cursor bold">
                              <input
                                type="radio"
                                id="radioInput"
                                name="gender" 
                                checked={gender === 'Male'}
                                onChange={() => this.setState({age: 'Male'})}
                              />
                              Male
                              {/*<span className="checkmark" />*/}
                            </label>
                            <label htmlFor="female" className="profile-call-label mt-16 cursor bold">
                              <input
                                type="radio"
                                id="radioInput"
                                name="gender" 
                                checked={age === 'Female'}
                                onChange={() => this.setState({age: 'Female'})}
                              />
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
                              {current.category}
                              <span className="arrow-down ml-8" />
                            </h5>
                            <div className="menu-card" style={{ marginTop: 0 }}>
                            {showMenuCard ? category.all.map((prop, i) => {
                              if(!prop.category_name) return null;
                              
                              return (
                                <h6
                                  key={i}
                                  className="text-blue light cursor hover-grey"
                                  onClick={() => this.setState({
                                    showMenuCard: false,
                                    current: {
                                      category: prop.category_name,
                                      description: prop.category_description,
                                      id: prop._id
                                    },
                                  })}
                                >
                                  {prop.category_name}
                                </h6>
                              );
                            }) : null}
                            </div>
                            <h6 className="light text-light">
                              {current.description}
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
                        <FormField
                          labelTitle="Add a brief comment"
                          labelClass="formSpan"
                          type="textarea"
                          placeholder="Caller mentioned a desire to be able to switch mechanics as
                          often as possible"
                          className="profile-input br-8 p-12"
                          style={{ overflow: "hidden", height: 100 }}
                          name="comment"
                          value={comment}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="mb-32 row pt-30">
                      <div>
                        <Button
                          className="br-30 mr-16"
                          padding="11px 32px"
                          background="var(--text-color)"
                          text="#fff"
                          onClick={this.submit}
                        >
                          <h6>Save Profile</h6>
                        </Button>
                        <Button
                          className="br-30"
                          padding="11px 32px"
                          background="background-grey"
                          text="var(--text-color)"
                          onClick={next}
                        >
                          <h6>Profile Next Call</h6>
                        </Button>
                      </div>
                      <h6 className="bold text-light cursor" onClick={toggle}>
                        Close
                      </h6>
                    </div>
                  </div>
              </div>


              <div label="Call Event">
               
                                    <hr/>
            
                  <div id="profilecallContainer">
               

                    
                    <h4 className="mb-8">View call event from +2348051113453</h4>
                    </div>

                    <table className="mtb-15">
                        <tbody>
                        <tr className="background-grey text-light table-head hover-grey">
                            <td>Start date</td>
                            <td>End date</td>
                            <td>Duration</td>
                            <td>Extension</td>
                            <td>Agent name</td>
                            <td>Status</td>
                        </tr>
                        <tr className="table-body text-main hover-grey">
                            
                            <td>
                              Today<p className="text-light mt-5">12:03pm</p>
                            </td>

                            <td>
                              Today<p className="text-light mt-5">12:03pm</p>
                            </td>
                            <td>03:20</td>
                            <td>..2345</td>
                            <td>Grace Audu</td>

                            <td>
                            <p className="label fault">Do not Pick</p>
                            </td>
                          
                        </tr>
                      </tbody>
                    </table>
              </div>
          </Tabs>
        </div>

      </Overlay>
    );
  }
}

export default ProfileCall;
