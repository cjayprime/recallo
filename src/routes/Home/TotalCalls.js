import React from "react"

const TotalCalls = (props) => {
  return (
    <>
      {/* if u want to change the container class here and the row and col make sure u use className="row-direction" u can check the style in main.css and where ever u want to try column use className="column-direction" */}
      <div className="overview-summary">
        <h1>467</h1>
        <p className="mt-5">
          This is the total number of calls received within the selected
          timeline. It sums up calls answered, missed and dropped by your
          clients
        </p>
      </div>
    </>
  )
}

export default TotalCalls
