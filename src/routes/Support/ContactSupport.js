import React, { Component } from "react";

import Button from "../../components/Button/button";
import AuthInput from "../../components/Form/AuthInput";

class ContactSupport extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    // error: null,
    popup: true,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: true,
    show6: false,
  };



  toggleDiv = (name) =>{
    const {popup, show1, show2, show3, show4, show5, show6}= this.state;
    switch(name) {
      case "popup":
       this.setState({popup: !popup})
       break;

      case "show1":
       this.setState({show1: !show1})
       break;

       case "show2":
       this.setState({show2: !show2})
       break;

       case "show3":
       this.setState({show3: !show3})
       break;

       case "show4":
       this.setState({show4: !show4})
       break;

       case "show5":
       this.setState({show5: !show5})
       break;

       case "show6":
       this.setState({show6: !show6})
       break;
      default:
        alert("null");
   }
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value });
  };

  render() {
    const { firstname, lastname, email, message, popup, show1,show2, show3,show4,show5,show6  } = this.state;
    return (
      <>
        <div className="support">
          <div className="support-message">
            <h6 className="light text-light mb-16">GOT A QUESTION</h6>
            <h1 className="p-40 mb-24">Contact Recallo</h1>
            <h6 id="hText" className="light text-light">
              We are here to help and answer any question you might have.
            </h6>
          </div>
          <div className="formDiv">
            <form>
              <h2 className="bold mb-50" id="contactHeader">Send Message</h2>
              <div className="message-row">
                <AuthInput
                  labelTitle="First name"
                  className="col-7"
                  name="firstname"
                  onChange={this.handleChange}
                  value={firstname}
                  novalidate
                />
                <AuthInput
                  labelTitle="Last name"
                  className="col-7"
                  name="lastname"
                  onChange={this.handleChange}
                  value={lastname}
                  novalidate
                />
              </div>
              <AuthInput
                labelTitle="Email address"
                className="mb-50"
                labelClass="auth-label"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={email}
                novalidate
              />
              <AuthInput
                labelTitle="Message"
                className="mb-50"
                name="message"
                value={message}
                onChange={this.handleChange}
                novalidate
              />
              <Button id="createAccount" className="br-8 signup-button" type="submit">
                <h6 className="bold">Send Message</h6>
              </Button>
            </form>
          </div>
          <div className="message-board">
            <div className="benefits-card">
              <h5 className="bold text-main mb-16" id="contactHeader">Contact information</h5>
              <div className="row-direction mb-24">
                <div>
                  <i className="fa fa-phone text-light" aria-hidden="true" />
                </div>
                <div className="ml-8">
                  <h5 className="bold text-blue">+234 800 111 2222</h5>
                  <h5 className="bold text-blue">+234 800 111 3333</h5>
                </div>
              </div>
              <div className="row-direction">
                <div>
                  <i className="fa fa-envelope text-light" aria-hidden="true" />
                </div>
                <h6 className="bold text-blue ml-8">hi@recallomobile.com</h6>
              </div>
              <hr id="line" />
              <h5 className="text-main bold mb-16">Have more questions?</h5>
              <h5 className="bold text-blue">Frequently Asked Questions</h5>
            </div>
            <div className="benefits-image" />
          </div>
        </div>
        <h5 id="kk" className="light text-light btw">Back to website</h5>

        {popup && 
                    
                    <div id="FaqAndTermsDiv" >
                    <div id="FaqAndTermsDiv2" className="overview br-16 plr-32 mb-32"><br/><br/>
                    <span onClick={()=>this.toggleDiv("popup")} className="modalHide">x</span>
                              <div style={{marginTop:40}}>
                              <span style={{fontSize:20, color:"black", fontWeight:"bold"}}>Frequently Asked Questions</span>
                              </div>
                              <br/> <hr/><br/><br/>
                              
                              <span className="faqStyletitle" onClick={()=>this.toggleDiv("show1")}>1. WHAT IS RECALLO MOBILE?</span>
                             {
                               show1 ?
                               <div onClick={()=>this.toggleDiv("show1")} className="minus-icon " />
                               :
                               <div onClick={()=>this.toggleDiv("show1")} className="plus-icon " />

                             }
                              


                             {show1 &&
                             <p className="faqStyletext"> provides contact centre services with features as calling, messaging, mailing, calling features, 
                             and other services to users around the world. Please read our Terms of Service so you understand 
                             </p>
                             }
                            <br/><br/> <hr/> <br/><br/>

                           
                              <span className="faqStyletitle" onClick={()=>this.toggleDiv("show2")}>2. WHO IS IT FOR?</span>
                              {
                               show2 ?
                               <div onClick={()=>this.toggleDiv("show2")} className="minus-icon " />
                               :
                               <div onClick={()=>this.toggleDiv("show2")} className="plus-icon " />

                             }
                              


                             {show2 &&
                             <p className="faqStyletext"> provides contact centre services with features as calling, messaging, mailing, calling features, 
                             </p>
                             }
                            <br/><br/> <hr/><br/><br/>

                           
                            <span className="faqStyletitle" onClick={()=>this.toggleDiv("show3")}>3. HOW IS RECALLO MOBILE DIFFERENT FROM ANY OTHER CALL CENTRE APPLICATION?</span>
                            {
                               show3 ?
                               <div onClick={()=>this.toggleDiv("show3")} className="minus-icon " />
                               :
                               <div onClick={()=>this.toggleDiv("show3")} className="plus-icon " />

                             }



                            {show3 &&
                            <p className="faqStyletext"> provides contact centre services with features as calling, messaging, mailing, calling features, 
                            </p>
                            }
                            <br/><br/> <hr/><br/><br/>

                            <span className="faqStyletitle" onClick={()=>this.toggleDiv("show4")}>4. IS IT AVAILABLE ON MY DEVICE?</span>
                            {
                               show4 ?
                               <div onClick={()=>this.toggleDiv("show4")} className="minus-icon " />
                               :
                               <div onClick={()=>this.toggleDiv("show4")} className="plus-icon " />

                             }



                            {show4 &&
                            <p className="faqStyletext"> provides contact centre services with features as calling, messaging, mailing, calling features, 
                            </p>
                            }
                            <br/><br/> <hr/><br/><br/>

                            <span className="faqStyletitle" onClick={()=>this.toggleDiv("show5")}>5. WHO ARE THE PEOPLE BEHIND RECALLO MOBILE?</span>
                            {
                               show5 ?
                               <div onClick={()=>this.toggleDiv("show5")} className="minus-icon " />
                               :
                               <div onClick={()=>this.toggleDiv("show5")} className="plus-icon " />

                             }



                            {show5 &&
                            <p className="faqStyletext"> 
                            provides contact centre services with features as calling, messaging, mailing, calling features, 
                            provides contact centre services with features as calling, messaging, mailing, calling features, 
                            provides contact centre services with features as calling, messaging, mailing, calling features, 
                            </p>
                            }
                            <br/><br/> <hr/><br/><br/>

                            <span className="faqStyletitle" onClick={()=>this.toggleDiv("show6")}>6. WHERE IS RECALLO MOBILE BASED?</span>
                            {
                               show6 ?
                               <div onClick={()=>this.toggleDiv("show6")} className="minus-icon " />
                               :
                               <div onClick={()=>this.toggleDiv("show6")} className="plus-icon " />

                             }



                            {show6 &&
                            <p className="faqStyletext"> 
                            provides contact centre services with features as calling, messaging, mailing, calling features, 
                            provides contact centre services with features as calling, messaging, mailing, calling features, 
                            provides contact centre services with features as calling, messaging, mailing, calling features, 
                            </p>
                            }
                            <br/><br/> <hr/><br/><br/>
                         </div> 
               
                    </div>
                   
                         }
      </>
    );
  }
}

export default ContactSupport;
