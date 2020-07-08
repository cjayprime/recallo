import React, { Component } from 'react';
import logo from "../../../assets/img/appLogo.png";
import Button from "../../../components/Button/button";
import AuthInput from "../../../components/Form/AuthInput";
import sucessMark from "../../../assets/img/sucessmark.svg";
import { Link } from 'react-router-dom';

class Passwordreset extends Component {
    state = {
        popup: true,
        email: "",
      };

      hide = () =>{
        this.setState({popup:false})
      }

      handleChange = (value, name, error) => {
        this.setState({ [name]: value, error });
      };

    render() {
        const {email, popup } = this.state;

        return (
            <>
                  {popup ?

                    <div id="Forgotpass" >
                    <div id="resetPasswordDiv" className="overview br-16 plr-32 mb-32">

                        <div style={{marginTop:20}}>
                        <div onClick={this.hide} style={{float:"right", fontSize:20, padding:"2px 7px"}}>x</div>
                        <br/><br/><br/>
                        <div>
                        <img src={logo} alt="mark" className="" style={{marginLeft:20}} />
                        </div> <br/><br/>
                            <span style={{fontSize:27, color:"#2E384D", marginLeft:20, fontWeight:"bold"}}>Enter new password</span>
                            </div>
                            <br/>
                            <form onSubmit={this.signin} style={{marginLeft:20, marginTop:30}}>
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
                                        onClick={this.continue}
                                        className="blue-button br-8"
                                        type="submit"
                                        padding="10px 102px">
                                        <h5 id="createAccount" className="bold text-white">Reset Password</h5>
                                    </Button>
                                    </div>
                                </form>
                            </div> 
                        </div>

                :

                <div id="Forgotpass" >
                    <div id="EmailSentSuccess" className="overview br-16 plr-32 mb-32">

                        <div style={{marginTop:20}}>
                        <div onClick={this.hide} style={{float:"right", fontSize:20, padding:"2px 7px"}}>x</div>
                        <br/><br/><br/>
                            <div>
                                <div>
                                <img src={logo} alt="mark" className="" style={{marginLeft:20}} />
                                </div> <br/><br/>
                            <img src={sucessMark} alt="mark" className="success-mark" />
                            </div> <br/><br/>
                            <span style={{fontSize:30, color:"#2E384D", marginLeft:20, fontWeight:"bold"}}>Password reset successful</span>
                            </div>
                            <br/>
                            <p style={{fontSize:16, marginLeft:20, color:"#777777"}}>
                                Log in to your account with your new password now
                            </p> 
                            <div style={{marginTop:30}}>
                                <Link to="/signin" style={{fontSize:15, marginLeft:20, fontWeight:"bold", textDecoration:"none", color:"#336799"}}>
                                    <span>Go to log in</span>
                                </Link>
                            </div>
                        </div> 
               
                    </div> 
                }
            </>
        )
    }
}
export default Passwordreset;