import React, { Component } from "react"
import Overlay from "../../components/Overlay"
import FormField from "../../components/Form"
import Button from "../../components/Button/button"

class ProfileCategoryOverlay extends Component {
  render() {
    const { open, toggle } = this.props

    return (
      <Overlay open={open} toggle={toggle}>
        <div>
          <h4 className="mb-8">Add new profile category</h4>
          <h6 className="light text-light mb-32">
            You can enter a name to categorise calls you profile
          </h6>
          <div>
            <FormField
              labelTitle="Enter name of profile category"
              labelClass="profile-label"
              className="br-8 profile-input p-12 mb-16"
            />
            <form className="mb-32">
              <label>
                <h6 className="mb-8 light profile-label">
                  Give a short description for the profile category
                </h6>
              </label>
              <textarea
                className="profile-input br-8 p-12"
                style={{ overflow: "hidden", height: 100 }}
              />
            </form>
            <Button
              className="br-30"
              padding="12px 60px"
              background="var(--text-color)"
              text="#fff"
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
          <div className="row-direction existing-category-card mb-16">
            <div className="flex-3 p-16 background-darkgrey">
              <h5 className="mb-8">Enquiry</h5>
              <h6 className="light text-light">
                Caller wanted to know more about our product and services
              </h6>
            </div>
            <div className="flex-1 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>13</h3>
            </div>
          </div>
          <div className="row-direction existing-category-card mb-16">
            <div className="flex-3 p-16 background-darkgrey">
              <h5 className="mb-8">Complaint</h5>
              <h6 className="light text-light">
                Caller raised an issue or two regarding our services
              </h6>
            </div>
            <div className="flex-1 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>34</h3>
            </div>
          </div>
          <div className="row-direction existing-category-card mb-16">
            <div className="flex-3 p-16 background-darkgrey">
              <h5 className="mb-8">Request</h5>
              <h6 className="light text-light">
                Caller expressed a desire or a need for somethings
              </h6>
            </div>
            <div className="flex-1 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>23</h3>
            </div>
          </div>
          <div className="row-direction existing-category-card mb-16">
            <div className="flex-3 p-16 background-darkgrey">
              <h5 className="mb-8">Engine fault</h5>
              <h6 className="light text-light">
                Caller raised an issue about engine
              </h6>
            </div>
            <div className="flex-1 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>17</h3>
            </div>
          </div>
        </div>
      </Overlay>
    )
  }
}

export default ProfileCategoryOverlay
