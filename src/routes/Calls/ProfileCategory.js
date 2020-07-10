import React, { Component } from "react";
import { Link } from "react-router-dom";

import Overlay from "../../components/Overlay";
import FormField from "../../components/Form";
import Button from "../../components/Button/button";

import Notification from "../../utils/notification";


class ProfileCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
      popover: null,
      name: '',
      description: '',
      error: ''
    };
  };

  toggle = (popover) => {
    this.setState({ popover });
  };

  componentDidUpdate(prevProps){
    const { getCategories, open } = this.props;
    if(open && prevProps.open !== open){
      getCategories();
    }
  };

  handleChange = (value, name, error) => {
    if(name)
    this.setState({
      [name]: value,
      error,
    });
  };

  submit = () => {
    const { addCategory, getCategories } = this.props;
    const {name, description} = this.state;
    const data = {name, description};
    const { error } = data;
    
    const dataKeys = Object.keys(data);
    if (
      !error &&
      dataKeys.filter((state) => state === "error" || !!data[state]).length === dataKeys.length
    ) {
      addCategory({
        category: name,
        description
      }, getCategories);
    } else {
      Notification.error(
        error || "Please fill in the form correctly."
      );
    }
  };

  render() {
    const { open, toggle, category } = this.props;
    const { popover, name, description} = this.state;
    return (
      <Overlay open={open} toggle={toggle}>
        <div>
          <h4 className="mb-8">Add new profile category</h4>
          <h6 className="light text-light mb-32">
            You can enter a name and description to categorize calls in your profile
          </h6>
          <div className="mb-32">
            <FormField
              labelTitle="Enter name of profile category"
              labelClass="profile-label"
              className="br-8 profile-input p-12 mb-16"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <FormField
              labelTitle="Give a short description for the profile category"
              labelClass="formSpan"
              type="textarea"
              className="profile-input br-8 p-12"
              style={{ overflow: "hidden", height: 100 }}
              name="description"
              value={description}
              onChange={this.handleChange}
            />
            <br/><br/><br/>
            <Button
              className="br-30"
              padding="12px 60px"
              background="var(--text-color)"
              text="#fff"
              onClick={this.submit}
            >
              Save
            </Button>
          </div>
        </div>
        <hr className="mt-40 mb-24" />
        <div>
          <h4 className="mb-8">Edit existing categories</h4>
          <h6 className="light text-light mb-32">
            You can rename, add to description or delete previous categories
          </h6>
          {
            category.all.map((prop, i) => {
              return (
                <div key={i} className="row-direction mb-16">
                  <div className="flex-3 p-16 existing-category-card background-darkgrey">
                    <h5 className="mb-8">{prop.category_name}</h5>
                    <h6 className="light text-light">
                      {prop.category_description}
                    </h6>
                  </div>
                  <div
                    onMouseEnter={()=>this.toggle(i + 1)}
                    onMouseLeave={()=>this.toggle(null)}
                    className="flex-1 existing-category-card2 p-16"
                    style={{position: 'relative'}}
                  >
                    <p>No of calls </p>
                    <p className="mb-8">profiled with</p>
                    <h3>{prop.user}</h3>
                    {
                      popover === i + 1 &&
                      <div className="row-direction"
                        style={{position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center', width: '100%'}}
                      >   
                        <div>
                          <Link to="#" className="Link">
                            <div className="Edit-icon" />
                            <p className="profilecalltag">Edit</p>
                          </Link> 
                        </div>
                        <div>
                          <Link to="#" className="Link">
                            <div className="Delete-icon" />
                            <p className="profilecalltag2">Delete</p>
                          </Link>
                        </div>  
                      </div>
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </Overlay>
    );
  }
}

export default ProfileCategory;