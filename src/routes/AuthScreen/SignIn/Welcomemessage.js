import React, { Component } from 'react';
import logo from "../../../assets/img/appLogo.png";
import Button from "../../../components/Button/button";
import AuthInput from "../../../components/Form/AuthInput";
import sucessMark from "../../../assets/img/sucessmark.svg";
import { Link } from 'react-router-dom';


class Welcomemessage extends Component {
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
                  {popup &&
                    <div id="Forgotpass" >
                    <div id="resetPasswordDiv" className="overview br-16 plr-32 mb-32">
        
                        <div className=" style={{marginTop:20}}">
                        <div className="modalHide" onClick={this.hide}>x</div>
                        <br/><br/><br/>
                        <div>
                        <img src={logo} alt="mark" className="" />
                        </div> <br/><br/>
                            <span className="modalTitle" >Welcome (registered first name)</span>
                            </div>
                            <br/>
                            <p className="modalParatext">
                            A request has been made to reset your password. 
                            If you made this request, please click on the button below
                            </p> 
        
                                <div className="mt-34" style={{marginLeft:18}}>
                                    <Button
                                        onClick={this.continue}
                                        className="blue-button br-8"
                                        type="submit"
                                        padding="10px 102px">
                                        <h5 id="createAccount" className="bold text-white">Reset Password</h5>
                                    </Button>
                                </div>
                                
                            </div> 
                
                        </div> 
                }
            </>
        )
    }
}
export default Welcomemessage;