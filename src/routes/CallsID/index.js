import React, { Component } from "react";
import Button from "../../components/Button/button";
import MenuItem from "../../components/MenuItem/menuItem";
import arrowLeft from "../../assets/img/arrow-left.png";
import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";
import editPen from "../../assets/img/editPen.svg";



class CallsID extends Component {
  state = {
    open: false,
  };

  componentDidMount(){
    const { getCalls, match: { params: {id} } } = this.props;
    getCalls('all?caller_id=' + id);
  }

  goBack = () => {
    const { history } = this.props;
    history.push('../calls');
  };

  toggle = (open) => {
    this.setState({ open: this.state.open ? "" : open });
  };


  render() {
    var { calls: { details, loading }, match: { params: {id} }  } = this.props;
    loading = loading.indexOf('calls/all?caller_id=' + id) >= 0;
    return (
      <>
        <div className="previous-header mb-0">
          <div className="callIDNew">
            <p className="light mb-8">
              <span className="text-blue mr-8">Calls</span>
              <span className="ml-8">Caller ID</span>
            </p>
            <h2 id="profCallHeader"  className="bold text-main">{id}</h2>
            
          </div>
          <div className="callID-history">
              <div className="row" id="callIDtopbutton">

              <div className="callidHeaderDiv">
               <p className="callidHeaderParagraph">Contact name</p>
               <h4 className="callidHeaderTag">Mya Willms</h4>
               </div>

               <div className="callidHeaderDiv">
               <p className="callidHeaderParagraph">Email address</p>
               <h4 className="callidHeaderTag">myawillms@yahoo.co.uk</h4>
               </div>

               <div className="callidHeaderDiv">
               <p className="callidHeaderParagraph">Company</p>
               <h4 className="callidHeaderTag">Thobatech Ltd</h4>
               </div>

                <div className="edit-circle mr-16">
                  <img src={editPen} alt="pen" className="edit-pen" />
                </div>
              </div>

            
            <div style={{marginTop:-22}}>
              <div
                className="row-direction align-center cursor goback"
                onClick={this.goBack}
              >
                <img src={arrowLeft} alt="arrow left" />
                <h5 className="bold text-blue ml-8">Go back</h5>
              </div>
            </div>
          </div>
        
        </div>
        <div className="screen-padding previous">
        <div className="previous-header-new mb-0">

        <div className="">
            <h2 id="profCallHeader" className="bold text-main">Previous calls</h2><br/>
          </div>
          <div className="callID-history-New">
          
            <div>
              <h3 id="profCallHeader2" className="bold mb-4 text-main">{details.length}</h3>
              <p className="light text-light">Previous calls</p>
            </div>
            <div>
              <h3 id="profCallHeader2" className="bold mb-4 text-grey">
                {
                  details.length
                  ? details.reduce((old, prop) => {
                      return old + ((new Date(prop.end_time).getTime() - new Date(prop.start_time).getTime()) / details.length);
                    }, 0)
                  : 0
                } mins
              </h3>
              <p className="light text-light">Average call time</p>
            </div>
            <div>
              <h3 id="profCallHeader2" className="bold mb-4 text-grey">
                {
                  details.length
                  ? details.reduce((old, prop) => {
                      return old + ((new Date(prop.end_time).getTime() - new Date(prop.start_time).getTime()) / details.length);
                    }, 0)
                  : 0
                } mins
              </h3>
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
                1-10 <span className="text-light ml-5 mr-5">of</span>{details.length}
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
              {
                loading
                ? <tr><td>Loading</td></tr>
                : details.length === 0
                  ? <tr><td>This caller ID has no details.</td></tr>
                  : details.map((call, i) => (
                      <tr key={i} className="table-body text-main hover-grey">
                        <td>
                          {call.end_time.split(' ')[0]}
                          <p className="text-light mt-5">
                            {call.end_time.split(' ')[1]}
                          </p>
                        </td>
                        <td>{call.personnel_name}</td>
                        <td>{call.call_duration}</td>
                        <td>
                          <p className={"label-" + (call.call_status === "answered" ? "voicenote" : "missed")}>
                            {call.call_status.substr(0, 1).toUpperCase() + '' + call.call_status.substr(1)}
                          </p>
                        </td>
                        <td>
                          {
                            call.call_status
                            ? 'Not yet profiled'
                            : 'Profiled'
                          }
                        </td>
                        <td className="text-blue bold cursor" onClick={() => {
                          call.call_status
                          ? this.toggle('profile-call')
                          : this.toggle('view-profile')
                        }}>
                          {
                            call.call_status
                            ? 'Profile call'
                            : 'View Profile'
                          }
                        </td>
                      </tr>
                    ))
              }
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default CallsID;