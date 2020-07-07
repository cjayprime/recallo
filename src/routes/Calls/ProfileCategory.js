import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overlay from "../../components/Overlay";
import FormField from "../../components/Form";
import Button from "../../components/Button/button";
//import editPen from "../../assets/img/editPen.svg";


class ProfileCategoryOverlay extends Component {

constructor(props){
  super(props);
      this.state={
        popover1: false,
        popover2: false,
        popover3: false,
        popover4: false,
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
    
    case "popover3":
      this.setState({popover3: true})
      break;

      case "popover4":
        this.setState({popover4: true})
        break;

        default:
          console.log("eror");

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

    case "popover3":
      this.setState({popover3: false})
      break;
    
      case "popover4":
        this.setState({popover4: false})
        break;
        default:
          console.log("eror");
 }
}
  render() {
    const { open, toggle } = this.props;
    const { popover1, popover2, popover3, popover4} = this.state
    
    
      return (
        <Overlay open={open} toggle={toggle}>
          <div>
            <h4 className="mb-8">Add new profile category</h4>
            <h6 className="light text-light mb-32">
              You can enter a name to categorise calls you profile
            </h6>
            <div>
            <form className="mb-32">
              <FormField
                labelTitle="Enter name of profile category"
                labelClass="profile-label"
                className="br-8 profile-input p-12 mb-16"
              />
             
                <span className="formSpan"> Give a short description for the profile category</span><br/><br/>
                <textarea
                  className="profile-input br-8 p-12"
                  style={{ overflow: "hidden", height: 100 }}
                />
              <br/><br/><br/>
              <Button
                className="br-30"
                padding="12px 60px"
                background="var(--text-color)"
                text="#fff"
              >
                Save
              </Button>
              </form>
            </div>
          </div>
          <hr className="mt-40 mb-24" />
          <div>
            <h4 className="mb-8">Edit existing categories</h4>
            <h6 className="light text-light mb-32">
              You can rename, add to description or delete previous categories
            </h6>
            <div className="row-direction mb-16">
              <div className="flex-3 p-16 existing-category-card background-darkgrey">
                <h5 className="mb-8">Enquiry</h5>
                <h6 className="light text-light">
                  Caller wanted to know more about our product and services
                </h6>
              </div>
              <div onMouseOver={()=>this.popoverlay("popover1")} onMouseOut={()=>this.popoverlay2("popover1")} className="flex-1 existing-category-card2 p-16">
             
                <p>No of calls </p>
                <p className="mb-8">profiled with</p>
                <h3>13</h3>
              </div>

              
                { popover1 && 
                     <div id="pfcategory">
                     <div id="pfcategoryDiv1" className="br-16 plr-32 mb-32">     
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
                <h5 className="mb-8">Complaint</h5>
                <h6 className="light text-light">
                  Caller raised an issue or two regarding our services
                </h6>
              </div>
              <div onMouseOver={()=>this.popoverlay("popover2")}  onMouseOut={()=>this.popoverlay2("popover2")}  className="flex-1 existing-category-card2 p-16">
                <p>No of calls </p>
                <p className="mb-8">profiled with</p>
                <h3>34</h3>
              </div>

              { popover2 && 
                     <div id="pfcategory">
                     <div id="pfcategoryDiv2" className="br-16 plr-32 mb-32">     
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
                <h5 className="mb-8">Request</h5>
                <h6 className="light text-light">
                  Caller expressed a desire or a need for somethings
                </h6>
              </div>
              <div onMouseOver={()=>this.popoverlay("popover3")}  onMouseOut={()=>this.popoverlay2("popover3")} className="flex-1 existing-category-card2 p-16">
                <p>No of calls </p>
                <p className="mb-8">profiled with</p>
                <h3>23</h3>
              </div>

              { popover3 && 
                     <div id="pfcategory">
                     <div id="pfcategoryDiv3" className="br-16 plr-32 mb-32">     
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
                <h5 className="mb-8">Engine fault</h5>
                <h6 className="light text-light">
                  Caller raised an issue about engine
                </h6>
              </div>
              <div onMouseOver={()=>this.popoverlay("popover4")}  onMouseOut={()=>this.popoverlay2("popover4")} className="flex-1 existing-category-card2 p-16">
                <p>No of calls </p>
                <p className="mb-8">profiled with</p>
                <h3>17</h3>
              </div>
              { popover4 && 
                     <div id="pfcategory">
                     <div id="pfcategoryDiv4" className="br-16 plr-32 mb-32">     
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

export default ProfileCategoryOverlay;
