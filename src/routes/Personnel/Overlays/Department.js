import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Overlay from "../../../components/Overlay";
import FormField from "../../../components/Form";
import Button from "../../../components/Button/button";

import Notification from "../../../utils/notification";

const overlay = React.createRef();
class Department extends Component {
  constructor(props){
    super(props);
    this.state = {
      popover: null,
      name: '',
      description: '',
      error: '',
      edit: -1,
      delete: -1
    };
  }

  toggle = (popover) => {
    this.setState({ popover });
  };

  edit = prop => {
    this.setState({
      edit: prop._id,
      name: prop.department ? prop.department : '',
      description: prop.description ? prop.description : ''
    }, () => {
      if(overlay.current){
        overlay.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    });
  };

  delete = prop => {
    if(window.confirm('Are you sure you want to delete the "' + prop.department.trim() + '" department?')){
      const { deleteDepartment } = this.props;
      deleteDepartment(prop._id);
    }
  };

  componentDidUpdate(prevProps){
    const { getDepartments, open } = this.props;
    if(open && prevProps.open !== open){
      getDepartments();
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
    const { createDepartment, updateDepartment, getDepartments } = this.props;
    const {name, description, edit} = this.state;
    const data = {name, description};
    const { error } = data;
    
    const dataKeys = Object.keys(data);
    if (
      !error &&
      dataKeys.filter((state) => state === "error" || !!data[state]).length === dataKeys.length
    ) {
      if(edit > -1){
        updateDepartment({
          department: name,
          description
        }, () => {
          overlay.current.scrollTo({
            top: 300,
            left: 0,
            behavior: 'smooth'
          });
          this.setState({
            edit: -1,
            name: '',
            description: ''
          }, getDepartments);
        }, edit);
      }else{
        createDepartment({
          department: name,
          description
        }, getDepartments);
      }
    } else {
      Notification.error(
        error || "Please fill in the form correctly."
      );
    }
  };

  render() {
    const { open, toggle, personnel } = this.props;
    const { popover, name, description, edit} = this.state;
    return (
      <Overlay open={open} toggle={toggle} overlay={overlay}>
        <div className="departmentContainer">
          <h4 className="mb-8">{edit > -1 ? 'Edit' : 'Add'} Department</h4>
          <br/><br/><br/>
          <div>
            <FormField
              labelTitle="Enter name of department"
              labelClass="profile-label"
              className="br-8 profile-input p-12 mb-16"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <br/>
            <FormField
              labelTitle="Give a short description for the department"
              labelClass="formSpan"
              className="profile-input br-8 p-12"
              type="textarea"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
            <br/><br/>
            <Button
              className="br-30"
              padding="10px 40px"
              background="var(--text-color)"
              text="#fff"
              onClick={this.submit}
            >
              {edit > -1 ? 'Edit' : 'Add'} department
            </Button>
          </div>
          <br/><br/>
        </div>
        <hr className="mt-40 mb-24" />
        <div className="departmentContainer">
          <h4 className="mb-8" id="editDepartment">Edit existing departments</h4>
          <h6 className="light text-light mb-32">
            You can rename, add to description or delete previous departments
          </h6>
          <div className="row-direction mb-16">
            <div className="flex-3 p-16">
              {
                personnel.department.all.map((prop, i) => {
                  return (
                    <div key={i} className="row-direction mb-16">
                      <div className="flex-3 p-16 existing-category-card background-darkgrey">
                        <h5 className="mb-8">{prop.department}</h5>
                        <h6 className="light text-light">
                          {prop.description}
                        </h6>
                      </div>
                      <div
                        onMouseEnter={()=>this.toggle(i + 1)}
                        onMouseLeave={()=>this.toggle(null)}
                        className="flex-1 existing-category-card2 p-16"
                        style={{position: 'relative'}}
                      >
                        <p>No of personnel </p>
                        <p className="mb-8">in department</p>
                        <h3>{prop.personnels ? prop.personnels : 0}</h3>
                        {
                          popover === i + 1 &&
                          <div className="row-direction"
                            style={{position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center', width: '100%'}}
                          >   
                            <div onClick={() => this.edit(prop)}>
                              {/* <Link to="#" className="Link"> */}
                                <div className="Edit-icon" />
                                <p className="profilecalltag">Edit</p>
                              {/* </Link>  */}
                            </div>
                            <div onClick={() => this.delete(prop)}>
                              {/* <Link to="#" className="Link"> */}
                                <div className="Delete-icon" />
                                <p className="profilecalltag2">Delete</p>
                              {/* </Link> */}
                            </div>  
                          </div>
                        }
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </Overlay>
    );
  }
}

export default Department;
