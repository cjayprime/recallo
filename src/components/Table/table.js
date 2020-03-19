import React, { Component } from "react";

import './table.css';

class Table extends Component{

    render() {

        return(
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
                    <tr className="table-body text-main hover-grey">
                        <td className="text-blue bold">+2348103153845</td>
                        <td>Today<p className="text-light mt-5">12:03pm</p></td>
                        <td>Grace Audu</td>
                        <td>03:20</td>
                        <td><label className="label yellow bold">Voicenote</label></td>
                        <td>Not yet profiled</td>
                        <td className="text-blue bold">Profile call</td>
                    </tr>
                    <tr className="table-body text-main hover-grey">
                        <td className="text-blue bold">+2348103153845</td>
                        <td>Today<p className="text-light mt-5">12:03pm</p></td>
                        <td>Grace Audu</td>
                        <td>03:20</td>
                        <td><label className="label green bold">Answered</label></td>
                        <td>Not yet profiled</td>
                        <td className="text-blue bold">Profile call</td>
                    </tr>
                    <tr className="table-body text-main hover-grey">
                        <td className="text-blue bold">+2348103153845</td>
                        <td>Today<p className="text-light mt-5">12:03pm</p></td>
                        <td>Grace Audu</td>
                        <td>03:20</td>
                        <td><label className="label green bold">Answered</label></td>
                        <td>Not yet profiled</td>
                        <td className="text-blue bold">Profile call</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}


export default Table;