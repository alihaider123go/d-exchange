import React from "react";

const Security = () => {
    return (
        <div className="security">
            <div className="icon-one">
                <img src="assets/img/security-vector-1.png" alt="security-vector-1" />
            </div>
            <div className="icon-two">
                <img src="assets/img/security-vector-2.png" alt="security-vector-2" />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.2s">
                        <div className="section-head">
                            <h4 className="lasthead">
                                Secure Exchange
                            </h4>
                            <h2 className="title">Security & Complaince</h2>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <div className="security-box one">
                                <div className="icon">
                                    <img src="assets/img/security-icon-1.png" alt="security-icon-1" />
                                </div>
                                <div className="content ">
                                    <h5 className="cont-head">3-D Secure</h5>
                                    <p className="text">Transaction Security</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
                            <div className="security-box one">
                                <div className="icon">
                                    <img src="assets/img/security-icon-2.png" alt="security-icon-2" />
                                </div>
                                <div className="content">
                                    <h5 className="cont-head">PIC DSS</h5>
                                    <p className="text">Security Standard</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                            <div className="security-box one">
                                <div className="icon">
                                    <img src="assets/img/security-icon-3.png" alt="security-icon-3" />
                                </div>
                                <div className="content">
                                    <h5 className="cont-head">2FA</h5>
                                    <p className="text">2 Steps Verifications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Security;
