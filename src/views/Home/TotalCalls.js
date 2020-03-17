import React from 'react'

const TotalCalls = (props) => {
    return (
        <>
            {/* if u want to change the container class here and the row and col make sure u use className="row-direction" u can check the style in main.css and where ever u want to try column use className="column-direction" */}
            <div className="container">
                <div className="row">
                    <div className="overview-summary col-12 col-md-3 col-lg-3 col-xl-3">
                        <h1>467</h1>
                        <p>
                            This is the total number of calls received within the selected timeline. It sums up calls answered, missed and dropped by your clients
                    </p>
                    </div>
                    <div className="overview-graph col-12 col-md-9 col-lg-9 col-xl-9">
                        hello
                </div>
                </div>
            </div>
        </>
    )
}

export default TotalCalls;