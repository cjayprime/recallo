import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Button from "../../../components/Button/button";
import AuthInput from "../../../components/Form/AuthInput";
import Layout from "../../../components/AppHeader/Layout";

class SignUp extends Component {
  state = {
    popup: true,
  };

  continue = (e) => {
    const { nextStep } = this.props;
    e.preventDefault();
    nextStep();
  };

  hide = () =>{
    this.setState({popup:false})
  }

  render() {
    const { popup } = this.state;
    const { form, handleChange } = this.props;
    const { name, email, password, confirmPassword } = form;
     
        return (
          <Layout {...this.props}>
            <div className="signup">
              <div className="signup-form form">
                <h1 className="bold mb-45">Create your Account</h1>
                <form className="go-top">
                  <AuthInput
                    className="field mb-40"
                    labelTitle="Business name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                  <AuthInput
                    className="mb-40"
                    labelTitle="Business email address"
                    name="email"
                    value={email}
                    type="email"
                    onChange={handleChange}
                  />
                  <div className="auth-password">
                    <AuthInput
                      className="col-7"
                      type="password"
                      labelTitle="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <AuthInput
                      type="confirm-password"
                      className="col-7"
                      labelTitle="Confirm Password"
                      name="confirmPassword"
                      passed={password === confirmPassword}
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <h6 className="lh-24 light text-light mb-32">
                    By clicking "Create Account" you agree to our
                    <span className="bold text-blue">Terms of Service</span>, and to
                    receive marketing communications from Recallo.
                  </h6>
                  <div>
                    <Button
                      onClick={this.continue}
                      type="submit"
                      className="signup-button br-8"
                    >
                      <h5 id="createAccount" className="bold">Create Account</h5>
                    </Button>
                  </div>
                  {/* <AlertDialog
                                    open={request.feedback.for === authRequest.signupRequest}
                                    message={request.feedback.message}
                                    success={request.feedback.success}
                                /> */}
                  <hr />
                  <h5 id="BackToSiteCreate" className="bold light text-light">Back to website</h5>
                </form>
              </div>
              <div className="signup-benefits">
                <div className="benefits-card">
                  <h5 className="bold text-main mb-16">What you will enjoy</h5>
                  <div className="benefits-body">
                 
                  <span className="markSign">✔</span>  <h5 id="side-text"  className="light text-light mb-16"> 
                     Efficiently reconceptualize innovative ROI without holistic
                      information. Objectively cultivate.
                    </h5>
                   
                    <span className="markSign">✔</span> <h5 id="side-text" className="light text-light mb-16">
                       Appropriately e-enable business "outside the box" thinking and
                      distributed.
                    </h5>
                    
                    <span className="markSign">✔</span><h5 id="side-text" className="light text-light">
                      Dramatically extend collaborative ROI vis-a-vis parallel
                      collaboration and idea-sharing. Intrinsicly.
                    </h5>
                  </div>
                  <hr />
                  <h5 id="subtext" className="text-main bold mb-16">
                    <Link className="Link" to="/">
                    Have more questions?
                    </Link>
                    </h5>
                  <h5 id="subtext" className="bold text-blue mb-16">
                  <Link className="Link" to="/">
                    Frequently Asked QuestionsSpeak to us on phone
                    </Link>
                    </h5>
                  <h5 id="subtext" className="bold text-blue">
                    
                  <Link className="Link" to="/">
                  Frequently Asked Questions</Link></h5>
                </div>
                <div className="benefits-image" />
              </div>
            </div>

          
                {popup && 
                    
           <div id="FaqAndTermsDiv" >
           <div id="FaqAndTermsDiv2" className="overview br-16 plr-32 mb-32">
                     <div style={{marginTop:40}}>
                     <span style={{fontSize:20, color:"black", fontWeight:"bold"}}>Terms of Service</span>
                     <span onClick={this.hide} style={{float:"right", fontSize:20, padding:"2px 7px"}}>x</span>
                     </div>
                     <br/>
                     <hr/><br/>
                     <p>Last modifield: April 22, 2020</p><br/>
                     <p><b>RECALLO MOBILE: </b> {" "}
                     provides contact centre services with features as calling, messaging, mailing, calling features, 
                     and other services to users around the world. Please read our Terms of Service so you understand 
                     the implications of your use of the RECALLO web-based Application and the RECALLO mobile App. 
                     With your use of RECALLO mobile, You agree to our Terms of Service (Terms) by installing, accessing, 
                     or using our apps, services, features, software, or website (together, Services). 
                      
                     </p><br/>
                     <p><b>NO ACCESS TO EMERGENCY SERVICES: </b> {" "}
                     Note that our services are strictly in line with what our services entail 
                     and nothing more or short of; would be provided based on emergencies of any form. Our Services does not 
                     treat differently or provide emergency services and is not in direct partnership with emergency services providers,
                      including the police, fire departments, or hospitals, or otherwise connect to public safety answering points. 
                     The outcome of such emergency engagement is not the responsibility of RECALLO MOBILE and its owners.

                     </p>

                     <br/><br/>
                     <h5>About our Services</h5><br/>
                     <p>
                     You must register for our Services using accurate data, and provide details that could help to consider 
                     onboarding the client or not. By using RECALLO MOBILE Services you agree to have studied the demographical
                      and Physiographical requirements that exist in your area and acknowledge that (or requirements your country 
                      sets for you to be authorized to use our Services without parental approval or any such approval). 
                      You must provide certain devices, software, and data connections to use our Services, which we otherwise 
                      do not supply. For as long as you use our Services, you consent to downloading and installing updates to 
                      our Services, including automatically. You are responsible for all carrier data plan and other fees and 
                      taxes associated with your use of our Services. We may charge you for our Services, including applicable taxes. 
                     We may refuse or cancel orders. We do not provide refunds for our Services, except as required by law.
                     </p>

                     <br/><br/>
                     <h5>Privacy Policy and Use Data</h5><br/>
                     <p>
                     that you are eligible.that you are eligible.that you are eligible.that you are eligible.
                     that you are eligible.that you are eligible.that you are eligible.that you are eligible.
                     </p>
                </div> 
      
           </div>
          
                }
          </Layout>
          
       
       );
     
  }
}

export default SignUp;
