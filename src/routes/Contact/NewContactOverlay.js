import React, { Component } from 'react'
import Overlay from "../../components/Overlay"
import TextInput from "../../components/Form/TextInput"
import Button from "../../components/Button/button"

class NewContactOverlay extends Component {
    state = {
        name: "",
        mobile: "",
        email: "",
        company: "",
        error: null
    }

    handleChange = (value, name, error) => {
        this.setState({ [name]: value, error })
    }

    render() {
        const { open, toggle } = this.props;
        const { name, mobile, email, company } = this.state;
        return (
            <Overlay open={open} toggle={toggle}>
                <div>
                    <h4 className="mb-40">Add new contact</h4>
                    <form>
                        <TextInput
                            labelTitle="Name"
                            labelClass="profile-label"
                            className="mb-24 br-8 profile-input p-12"
                            onChange={this.handleChange}
                            value={name}
                        />
                        <TextInput
                            labelTitle="Phone number"
                            labelClass="profile-label"
                            className="mb-24 br-4 profile-input p-12"
                            onChange={this.handleChange}
                            value={mobile}
                        />
                        <TextInput
                            labelTitle="Email address"
                            type="email"
                            labelClass="profile-label"
                            className="mb-24 br-8 profile-input p-12"
                            onChange={this.handleChange}
                            value={email}
                        />
                        <TextInput
                            labelTitle="Company name"
                            labelClass="profile-label"
                            className="br-8 profile-input p-12"
                            onChange={this.handleChange}
                            value={company}
                        />
                        <div className="mt-300">
                            <Button background="#336799" className="br-30" text="#fff" padding="12px 227px"><h6 className="bold">Save</h6></Button>
                        </div>
                    </form>
                </div>
            </Overlay>
        )
    }
}

export default NewContactOverlay;