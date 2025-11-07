import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <h2 className="text-center">
        Open a free demat and trading account online
      </h2>
      <br></br>
      <p className="text-center">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>
      <br></br>
      <br></br>
      <div className="row align-items-center mt-4">
        <div className="col-md-6">
          <img
            src="/media/images/sup.jpg"
            alt="Sign up"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-white">
            <h4 className="mb-2">Signup now</h4>
            <p className="text-muted mb-4">
              Or track your existing application
            </p>

            {/* Phone input */}
            <div className="d-flex align-items-center border rounded mb-3 p-2">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="me-2"
              />
              <span className="me-2">+91</span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter mobile number"
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-100 mb-3">Get OTP</button>

            {/* Terms text */}
            <p className="text-muted small">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-decoration-none">
                terms & privacy policy
              </a>
              .
            </p>

            {/* NRI link */}
            <p className="small">
              Looking to open NRI account?{" "}
              <a href="#" className="text-decoration-none">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
