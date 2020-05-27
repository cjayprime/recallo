import React, { Component } from "react"
import { Link } from "react-router-dom";

import editPen from "../../assets/img/editPen.svg"
// import deletePen from "../../assets/img/"

class Table extends Component {
    render() {
        return (
            <table className="mtb-15">
                <tbody>
                    <tr className="background-grey text-light table-head hover-grey">
                        <td />
                        <td>Contact name</td>
                        <td>Phone number</td>
                        <td>Email address</td>
                        <td>Last call</td>
                        <td>Action</td>
                    </tr>
                    <tr className="table-body text-main hover-grey">
                        <td className="text-blue bold" />
                        <td>Andrew Adesioye</td>
                        <td className="text-blue bold">
                            <Link to="/admin/number-details">+2349060242202</Link>
                        </td>
                        <td>andrewb@recallo.services</td>
                        <td>
                            <p className="mb-4">Today</p>
                            <p className="light text-light">12:03pm</p>
                        </td>
                        <td>
                            <div className="row-direction">
                                <div className="edit-circle mr-16">
                                    <img src={editPen} alt="pen" className="edit-pen" />
                                </div>
                                <div className="edit-circle">
                                    <img src={editPen} alt="pen" className="edit-pen" />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="table-body text-main hover-grey">
                        <td className="text-blue bold" />
                        <td>Andrew Adesioye</td>
                        <td className="text-blue bold">
                            <Link to="/admin/number-details">+2349060242202</Link>
                        </td>
                        <td>andrewb@recallo.services</td>
                        <td>
                            <p>Today</p>
                            <p className="light text-light">3:45pm</p>
                        </td>
                        <td>
                            <div className="row-direction">
                                <div className="edit-circle mr-16">
                                    <img src={editPen} alt="pen" className="edit-pen" />
                                </div>
                                <div className="edit-circle">
                                    <img src={editPen} alt="pen" className="edit-pen" />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;
