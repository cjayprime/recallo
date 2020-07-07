import React, { Component } from "react";

import AuthInput from "../../../components/Form/AuthInput";
import FormField from "../../../components/Form";
import Button from "../../../components/Button/button";
import Layout from "../../../components/AppHeader/Layout";
import arrowright from "../../../assets/img/arrow-right-circle.png";
import Notification from "../../../utils/notification";
import sucessMark from "../../../assets/img/sucessmark.svg";
import logo from "../../../assets/img/appLogo.png";


export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    popup: false,
  };

  handleChange = (value, name, error) => {
    this.setState({ [name]: value, error });
  };

  show = () =>{
    this.setState({popup:true})
  }

  hide = () =>{
    this.setState({popup:false})
  }

  signin = (e) => {
    e.preventDefault();
    const { email, password, error } = this.state;
    const { signin, history } = this.props;
    if (!error && email && password) {
      signin({ email, password }, () => {
        history.push("/admin/home");
      });
    } else {
      Notification.error(error || "Please fill in the form correctly.");
    }
  };

  render() {
    const { email, password, popup } = this.state;
    return (
      <Layout {...this.props}>
        <div className="signin">
          <div className="signin-form form">
            <h1 className="bold mb-16">Log in</h1>
            <h3 className="light text-light">
              Please enter your email address and password
            </h3>
            <form onSubmit={this.signin}>
              <div className="field">
                <AuthInput
                  type="email"
                  labelTitle="Email address"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <AuthInput
                  type="password"
                  labelTitle="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="row">
                <FormField
                  type="checkbox"
                  checkboxClass="checkbox"
                  checkboxTitle="Remember me"
                />
                <div>
                  <h6 onClick={this.show} className="bold text-blue">Forgot your password?</h6>
                </div>
              </div>
              <div className="mt-34">
                <Button type="submit" className="login-button br-8">
                  <h5 id="login" className="bold">login</h5>
                  <img src={arrowright} alt="arrow right icon" />
                </Button>
              </div>
            </form>
            
            <hr id="SignInBreakLine"  className="signin-hr" />
            <div>
              <h5 id="BackToSite" className="light text-light bk-2-web">Back to website</h5>
            </div>
          </div>
          <div className="signin-icon" />
        </div>
                 
                 
       {popup &&
        <div id="Forgotpass" >
        <div id="Forgotpass2" className="overview br-16 plr-32 mb-32">

              <div style={{marginTop:20}}>
              <div onClick={this.hide} style={{float:"right", fontSize:20, padding:"2px 7px"}}>x</div>
              <br/><br/><br/>
                  <span style={{fontSize:30, color:"#2E384D", marginLeft:20, fontWeight:"bold"}}>Forgot password?</span>
                  </div>
                  <br/>
                  <br/>
                  
                  <p style={{fontSize:16, marginLeft:20, color:"#777777"}}>
                  Enter your email address and we'll send you a link to reset your password
                  </p> 
                  <form onSubmit={this.signin} style={{marginLeft:20, marginTop:60}}>
                    <div className="field">
                      <AuthInput
                        type="email"
                        labelTitle="Email address"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </div>
                   
                    <div className="mt-34">
                    <Button
                            className="br-30 account-button orange-hover"
                            padding="10px 70px"
                            background="var(--text-color)"
                            text="#fff"
                          >
                          <h6 className="Bold">Send Me Email Link</h6> 
                      </Button>
                    </div>
                  </form>

                    
                </div> 
      
            </div> 
       

       /*
          RESET PASSWORD MODAL

          <div id="Forgotpass" >
          <div id="resetPasswordDiv" className="overview br-16 plr-32 mb-32">

                <div style={{marginTop:20}}>
                <div onClick={this.hide} style={{float:"right", fontSize:20, padding:"2px 7px"}}>x</div>
                <br/><br/><br/>
                <div>
                <img src={logo} alt="mark" className="" />
                </div> <br/><br/>
                    <span style={{fontSize:27, color:"#2E384D", marginLeft:20, fontWeight:"bold"}}>Welcome (registered first name)</span>
                    </div>
                    <br/>
                    <p style={{fontSize:16, marginLeft:20, color:"#777777"}}>
                    A request has been made to reset your password. 
                    If you made this request, please click on the button below
                    </p> 

                        <div className="mt-34" style={{marginLeft:18}}>
                          <Button 
                          type="submit" 
                          padding="10px 29px"
                          className="login-button br-8"
                          >
                            <h5 id="resetPassword" className="bold">Reset Password</h5>
                          </Button>
                        </div>
                      
                  </div> 
        
              </div>
       */
     



        /*
            EMAIL SENT MODAL
         <div id="Forgotpass" >
        <div id="EmailSentSuccess" className="overview br-16 plr-32 mb-32">

              <div style={{marginTop:20}}>
              <div onClick={this.hide} style={{float:"right", fontSize:20, padding:"2px 7px"}}>x</div>
              <br/><br/><br/>
              <div>
              <img src={sucessMark} alt="mark" className="success-mark" />
              </div> <br/><br/>
                  <span style={{fontSize:30, color:"#2E384D", marginLeft:20, fontWeight:"bold"}}>Email Link Sent</span>
                  </div>
                  <br/>
                  <p style={{fontSize:16, marginLeft:20, color:"#777777"}}>
                      Please check the email address you provided to 
                      follow the next steps in resetting your password
                  </p> 
              

                    
                </div> 
      
            </div> 
        */
            
       }    
      </Layout>
    );
  }
}
