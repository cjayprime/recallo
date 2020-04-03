import React, { Component } from "react";
import { Link } from "react-router-dom";

import './table.css';

class Table extends Component {

    render() {

        return (
            <table className="mtb-15">
                <tbody>
                    <tr className="background-grey text-light table-head hover-grey">
                        <td>Call ID</td>
                        <td>Call date & time</td>
                        <td>Personnel</td>
                        <td>Call duration</td>
                        <td>Call status</td>
                        <td>Profile category</td>
                        <td>Action</td>
                    </tr>
                    {Array.apply(null, Array(6)).map((a, i) => (
                        <tr className="table-body text-main hover-grey">
                            <td className="text-blue bold"><Link to="/admin/previous">+2348103153845</Link></td>
                            <td>Today<p className="text-light mt-5">12:03pm</p></td>
                            <td>Grace Audu</td>
                            <td>03:20</td>
                            <td><label className="label yellow bold">Voicenote</label></td>
                            <td>Not yet profiled</td>
                            <td className="text-blue bold">Profile call</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Table;