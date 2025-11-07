import React from "react";

function Os() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h2 className="text-center">
          Steps to open a demat account with Zerodha
        </h2>
        <br></br>
        <br></br>
        <div className="col-md-6 mb-4">
          <img
            src="media\images\steps-acop.jpg"
            alt="Steps"
            className="img-fluid mb-3"
            style={{ width: "400px", height: "300px" }}
          />
        </div>
        <div className="col-md-6 text-md-start">
            <br></br>
          <h3 className="fw-semibold mb-4">
            Steps to open a demat account with{" "}
            <span className="brand">Zerodha</span>
          </h3>

          <ol className="steps-list ps-3">
            <br></br>
            <li>Enter the requested details</li>
            <br></br>
            <li>Complete e-sign & verification</li>
            <br></br>
            <li>Start investing!</li>
            <br></br>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Os;
