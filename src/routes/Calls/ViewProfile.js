import React, { Component } from "react";
import Overlay from "../../components/Overlay";

class ViewProfile extends Component {
  render() {
    const { open, toggle, call } = this.props;

    return (
      <Overlay open={open} toggle={toggle}>
        <div>
          <h4 className="mb-8">Profiled call from +2348051113453</h4>
          <h6 className="light text-light mb-32">View call details</h6>
          <div className="mb-32">
            <div className="background-grey flex view-profile-table">
              <h6 className="text-light flex-1 light">Call ID</h6>
              <h6 className="flex-3">{call.caller_id}</h6>
            </div>
            <div className="flex view-profile-table">
              <h6 className="text-light flex-1 light">Personnel</h6>
              <h6 className="flex-3">{call.personnel_name}</h6>
            </div>
            <div className="background-grey flex view-profile-table">
              <h6 className="text-light flex-1 light">Date Time</h6>
              <h6 className="flex-3">{call.end_time}</h6>
            </div>
            <div className="flex view-profile-table">
              <h6 className="text-light flex-1 light">Duration</h6>
              <h6 className="flex-3">{call.call_duration}</h6>
            </div>
            <div className="background-grey flex view-profile-table">
              <h6 className="text-light flex-1 light">Status</h6>
              <h6 className="flex-3">{call.call_status}</h6>
            </div>
            <div className="flex view-profile-table">
              <h6 className="text-light flex-1 light">Age group</h6>
              <h6 className="flex-3">{call.age}</h6>
            </div>
            <div className="background-grey flex view-profile-table">
              <h6 className="text-light flex-1 light">Gender</h6>
              <h6 className="flex-3">{call.gender}</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="row-direction profile-category-card mb-32 background-darkgrey">
            <div className="p-16">
              <h6 className="light text-light mb-16">Category</h6>
              <h5 className="mb-8">Engine faults</h5>
              <h6 className="light text-light">
                Caller raised an issue about engine
              </h6>
            </div>
          </div>
          <h6 className="light text-light mb-8">Comments</h6>
          <div className="row-direction profile-category-card mb-16 background-darkgrey">
            <div className="p-16">
              <h6 className="light text-light">
                Caller mentioned a desire to be able to switch mechanics as
                often as possible
              </h6>
            </div>
          </div>
        </div>
      </Overlay>
    );
  }
}

export default ViewProfile;
