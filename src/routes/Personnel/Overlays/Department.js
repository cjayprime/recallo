import React, { Component } from "react";
import Overlay from "../../../components/Overlay";
import FormField from "../../../components/Form";
import Button from "../../../components/Button/button";
import { Link } from "react-router-dom";


class Department extends Component {
  constructor(props){
    super(props);
        this.state={
          popover1: false,
          popover2: false,
        };
      }

      popoverlay = (name) =>{
        /*  console.log(name);
      */
       switch(name) {
         case "popover1":
          this.setState({popover1: true})
          break;
      
          case "popover2":
          this.setState({popover2: true})
          break;
      
       }
      }
       
      popoverlay2 = (name) =>{
        /*console.log(name+"2");
      */
       switch(name) {
         case "popover1":
          this.setState({popover1: false})
          break;
      
          case "popover2":
          this.setState({popover2: false})
          break;
       }
      }
  render() {
    const { open, toggle } = this.props;
    const { popover1, popover2} = this.state

    return (
      <Overlay open={open} toggle={toggle}> 
        <div className="departmentContainer">
          <h4 className="mb-8">Add Department</h4><br/><br/><br/>
          {/* <h6 className="light text-light mb-32"></h6> */}
          <div>

            <FormField
              labelTitle="Enter name of department"
              labelClass="profile-label"
              className="br-8 profile-input p-12 mb-16"
            />
            <form className="mb-32">
        
              <span className="formSpan"> Give a short description for the department</span><br/><br/>
              <textarea
                className="profile-input br-8 p-12"
                style={{ overflow: "hidden", height: 100 }}
              />
            </form>
            <Button
              className="br-30"
              padding="10px 40px"
              background="var(--text-color)"
              text="#fff"
            >
              Add department
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
            <div className="flex-3 p-16 existing-category-card background-darkgrey">
              <h5 className="mb-8">Sales</h5>
              <h6 className="light text-light">
                Department handles matters regarding purchases and rentals
              </h6>
            </div>
            <div onMouseOver={()=>this.popoverlay("popover1")} onMouseOut={()=>this.popoverlay2("popover1")} className="flex-1 existing-category-card2 p-16">
              <p>No of personnels </p>
              <p className="mb-8">in department</p>
              <h3>6</h3>
            </div>
            { popover1 && 
                     <div id="deptOver">
                     <div id="deptOver1" className="br-16 plr-32 mb-32">     
                           <div className="row-direction">   
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
                       </div> 
                 </div>
                }
          </div>
          <div className="row-direction mb-16">
            <div className="flex-3 p-16 existing-category-card background-darkgrey">
              <h5 className="mb-8">Technical</h5>
              <h6 className="light text-light">
                Department handles matters regarding vehicle parts and knowledge
              </h6>
            </div>
            <div onMouseOver={()=>this.popoverlay("popover2")} onMouseOut={()=>this.popoverlay2("popover2")} className="flex-1 existing-category-card2 p-16">
              <p>No of personnels </p>
              <p className="mb-8">in department</p>
              <h3>4</h3>
            </div>

            { popover2 && 
                     <div id="deptOver">
                     <div id="deptOver2" className="br-16 plr-32 mb-32">     
                           <div className="row-direction">   
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
                       </div> 
                 </div>
                }
          </div>
        </div>
        </Overlay>

    );
  }
}

export default Department;
