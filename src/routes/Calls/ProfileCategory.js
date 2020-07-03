import React, { Component } from "react";
import Overlay from "../../components/Overlay";
import FormField from "../../components/Form";
import Button from "../../components/Button/button";

class ProfileCategory extends Component {
  render() {
    const { open, toggle } = this.props;

    return (
      <Overlay open={open} toggle={toggle}>
        <div>
          <h4 className="mb-8">Add new profile category</h4>
          <h6 className="light text-light mb-32">
            You can enter a name to categorise calls you profile
          </h6>
          <div>
          <form className="mb-32">
<<<<<<< HEAD:src/routes/Calls/ProfileCategoryOverlay.js
=======
          {/* <span className="formSpan">Enter name of profile category</span> */}
>>>>>>> 4f1f9aa6b1060433b9dcfad3023aa30480be6856:src/routes/Calls/ProfileCategory.js
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
            <div className="flex-1 existing-category-card2 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>13</h3>
            </div>
          </div>
          <div className="row-direction mb-16">
            <div className="flex-3 p-16 existing-category-card background-darkgrey">
              <h5 className="mb-8">Complaint</h5>
              <h6 className="light text-light">
                Caller raised an issue or two regarding our services
              </h6>
            </div>
            <div className="flex-1 existing-category-card2 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>34</h3>
            </div>
          </div>
          <div className="row-direction mb-16">
            <div className="flex-3 p-16 existing-category-card background-darkgrey">
              <h5 className="mb-8">Request</h5>
              <h6 className="light text-light">
                Caller expressed a desire or a need for somethings
              </h6>
            </div>
            <div className="flex-1 existing-category-card2 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>23</h3>
            </div>
          </div>
          <div className="row-direction mb-16">
            <div className="flex-3 p-16 existing-category-card background-darkgrey">
              <h5 className="mb-8">Engine fault</h5>
              <h6 className="light text-light">
                Caller raised an issue about engine
              </h6>
            </div>
            <div className="flex-1 existing-category-card2 p-16">
              <p>No of calls </p>
              <p className="mb-8">profiled with</p>
              <h3>17</h3>
            </div>
          </div>
        </div>
      </Overlay>
    );
  }
}

export default ProfileCategory;
