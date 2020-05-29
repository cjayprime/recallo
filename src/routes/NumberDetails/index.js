import React, { Component } from "react";

import MenuItem from "../../components/MenuItem/menuItem";
import arrowLeft from "../../assets/img/arrow-left.png";
import editPen from "../../assets/img/editPen.svg";

import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";

class NumberDetails extends Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    return (
      <>
        <div className="previous-header">
          <div className="callID">
            <p className="light mb-8">
              <span className="text-blue mr-8">Calls</span>>
              <span className="ml-8">Caller ID</span>
            </p>
            <h2 className="bold text-main">+2348051113453</h2>
          </div>
          <div className="callID-history mt-44">
            <div>
              <p className="light text-light mb-4">Contact name</p>
              <h3 className="bold text-main">Mya Willms</h3>
            </div>
            <div>
              <p className="light text-light mb-4">Email address</p>
              <h3 className="bold text-main">myawillms@yahoo.co.uk</h3>
            </div>
            <div>
              <p className="light text-light mb-4">Company</p>
              <h3 className="bold text-main">-</h3>
            </div>
            <div>
              <div className="edit-circle">
                <img src={editPen} alt="pen" className="edit-pen" />
              </div>
            </div>
            <div>
              <p
                className="row-direction align-center cursor goback"
                onClick={this.goBack}
              >
                <img src={arrowLeft} alt="arrow left" />
                <h5 className="bold text-blue ml-8">Go back</h5>
              </p>
            </div>
          </div>
        </div>
        <div className="screen-padding previous">
          <div className="title-bar">
            <div className="title">
              <h2>Previous calls</h2>
            </div>
            <div className="callID-history">
              <div>
                <h3 className="bold mb-4 text-main">12</h3>
                <p className="light text-light">Previous calls</p>
              </div>
              <div>
                <h3 className="bold mb-4 text-main">4.3 mins</h3>
                <p className="light text-light">Average call time</p>
              </div>
              <div>
                <h3 className="bold mb-4 text-main">1.2 mins</h3>
                <p className="light text-light">Average wait time</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="menu-bar ptb-20">
            <div>
              <MenuItem
                item={{
                  title: "Personnel",
                  values: ["Yesterday", "Today", "monday"],
                }}
              />
              <MenuItem
                item={{
                  title: "Call date",
                  values: ["Today", "Yesterday", "Last 7 days", "Select range"],
                }}
              />
              <MenuItem
                item={{
                  title: "Profile category",
                  values: ["Not yet profited", "Engine fault", "Break fault"],
                }}
              />
              <MenuItem
                item={{
                  title: "Call status",
                  values: ["Answered", "Voicenotes", "Dropped", "Missed"],
                }}
              />
              <div className="search-form">
                <SearchIcon className="search-icon" />
                <input className="br-3 search bc-blue hover" />
              </div>
            </div>
            <div className="menu-bar-right">
              <p className="text-light mr-5">Viewing results</p>
              <p className="text-main bold mr-20">
                1-10 <span className="text-light ml-5 mr-5">of</span>36
              </p>
              <div className="arrow-icons">
                <span className="arrow arrow-left mr-10 op-4 hover" />
                <span className="arrow arrow-right" />
              </div>
            </div>
          </div>

          <table className="mtb-15">
            <tbody>
              <tr className="background-grey text-light table-head hover-grey">
                <td>Call date & time</td>
                <td>Personnel</td>
                <td>Call duration</td>
                <td>Call status</td>
                <td>Profile category</td>
                <td>Action</td>
              </tr>
              {Array.apply(null, Array(6)).map((a, i) => (
                <tr className="table-body text-main hover-grey">
                  <td>
                    Today<p className="text-light mt-5">12:03pm</p>
                  </td>
                  <td>Grace Audu</td>
                  <td>03:20</td>
                  <td>
                    <label className="label yellow bold">Voicenote</label>
                  </td>
                  <td>Not yet profiled</td>
                  <td className="text-blue bold">Profile call</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default NumberDetails;
