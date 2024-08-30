import React from "react";
import BreadCrumb from "../../Component/CommonComponent/BreadCrumb/BreadCrumb";
const Checkout = () => {
  return (
    <>
      <div className="mt-20">
        <div className="container">
          <div className="my-20">
            <h1 className="font-DMsans text-[49px] font-bold text-main_font_color">
              Checkout
            </h1>
            <BreadCrumb />
          </div>
          <div className="my-20">
            <h1>Have a coupon? Click here to enter your code</h1>
          </div>
          <div className="my-5">
            <h2 className="font-DMsans text-[39px] font-bold text-main_font_color">
              Billing Details
            </h2>
          </div>
          <form>
            <div className="flex items-center">
              <label htmlFor="FirstName">First Name</label>
              <input
                type="text"
                id="firstname"
                placeholder="first name"
                labelTitl="First Name"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
