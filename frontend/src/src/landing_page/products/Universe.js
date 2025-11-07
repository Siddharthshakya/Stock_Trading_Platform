import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media\images\smallcaseLogo.png"></img>
          <br></br><br></br>
          <p className="text-small  text-muted">Thematic investing platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\streakLogo.png" style={{ width: "35%" }}></img>
          <br></br>
          <br></br>
          <p className="text-small text-muted">Systematic Trading platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\dittoLogo.png" style={{ width: "30%" }}></img>
          <br></br>
          <br></br>
          <p className="text-small text-muted">
            Personalized advice on life
            <br />
            and health insurance.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 mb-5">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "45%" }}
          ></img>
          <br></br>
          <br></br>
          <p className="text-small text-muted">Our asset management venture</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ width: "45%" }}
          ></img>
          <br></br>
          <br></br>
          <p className="text-small text-muted">
            Options trading platform that<br></br> lets you create strategies.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\goldenpiLogo.png" style={{ width: "45%" }}></img>
          <br></br>
          <br></br>
          <p className="text-small text-muted">Bonds Trading Platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
