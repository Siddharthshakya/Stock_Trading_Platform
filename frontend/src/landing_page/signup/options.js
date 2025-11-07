import React from "react";

function options() {
  return (
    <div className="container p-5 mb-5">
      <h2 className="text-center">
        Investment options with Zerodha demat account
      </h2>
      <br></br>
      <br></br>
      <div className="row text-center mb-4">
        {/* Stocks */}
        <div className="col-md-6 col-6 mb-4">
          <img
            src="media\images\stocks-acop.jpg"
            alt="Stocks"
            className="img-fluid mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="fw-semibold">Stocks</h5>
          <p className="text-muted small">
            Invest in all exchange-listed securities
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="col-md-6 col-6 mb-4">
          <img
            src="media\images\mf-acop.jpg"
            alt="Mutual Funds"
            className="img-fluid mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="fw-semibold">Mutual Funds</h5>
          <p className="text-muted small">
            Invest in commission-free direct mutual funds
          </p>
        </div>

        {/* IPO */}
        <div className="col-md-6 col-6 mb-4">
          <img
            src="media\images\ipo-acop.jpg"
            alt="IPO"
            className="img-fluid mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="fw-semibold">IPO</h5>
          <p className="text-muted small">
            Apply to the latest IPOs instantly via UPI
          </p>
        </div>

        {/* Futures & Options */}
        <div className="col-md-6 col-6 mb-4">
          <img
            src="media\images\fo-acop.jpg"
            alt="Futures & Options"
            className="img-fluid mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="fw-semibold">Futures & Options</h5>
          <p className="text-muted small">
            Hedge and mitigate market risk through simplified F&O trading
          </p>
        </div>
      </div>

      {/* Explore button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary px-4 py-2">
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default options;
