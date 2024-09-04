import React, { useState } from "react";
import BreadCrumb from "../CommonComponent/BreadCrumb/BreadCrumb";

const CheckoutComponent = () => {
  const [billingDetails, setbillingDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });
  const [billingDetailsError, setbillingDetailsError] = useState({
    firstNameError: "",
    lastNameError: "",
    countryError: "",
    streetAddressError: "",
    cityError: "",
    postCodeError: "",
    phoneError: "",
    emailError: "",
  });

  const HandleField = (e) => {
    setbillingDetails;
    ({
      ...billingDetails,
      [e.target.id]: e.target.value,
    });
  };

  const HandleProceed = () => {
    const {
      firstName,
      lastName,
      country,
      streetAddress,
      city,
      postCode,
      phone,
      email,
    } = billingDetails;

    if (!firstName) {
      setbillingDetailsError({
        ...billingDetailsError,
        firstNameError: "First Name Required",
      });
    } else if (!lastName) {
      setbillingDetailsError({
        ...billingDetailsError,
        lastNameError: "Last Name Required",
      });
    } else if (!country) {
      setbillingDetailsError({
        ...billingDetailsError,
        countryError: "Country Required",
      });
    } else if (!streetAddress) {
      setbillingDetailsError({
        ...billingDetailsError,
        streetAddressError: "Street Address Required",
      });
    } else if (!city) {
      setbillingDetailsError({
        ...billingDetailsError,
        cityErrorError: "City Required",
      });
    } else if (!postCode) {
      setbillingDetailsError({
        ...billingDetailsError,
        postCodeError: "Post Code Required",
      });
    } else if (!phone) {
      setbillingDetailsError({
        ...billingDetailsError,
        phoneError: "Phone Required",
      });
    } else if (!email) {
      setbillingDetailsError({
        ...billingDetailsError,
        emailError: "Email Required",
      });
    }
  };

  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="">
            <h1 className="pb-2 font-DMsans text-[49px] font-bold text-main_font_color">
              Checkout
            </h1>
            <BreadCrumb />
          </div>
          <p className="pt-20 font-DMsans text-base font-normal text-secondary_font_color">
            Have a coupon?{" "}
            <span className="cursor-pointer text-main_font_color">
              Click here to enter your code
            </span>
          </p>
          <div className="pt-20">
            <h2 className="pb-9 font-DMsans text-[39px] font-bold text-main_font_color">
              Billing Details
            </h2>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="items-cente flex gap-x-9">
                <div className="flex w-full flex-col">
                  <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                    First Name <span className="text-red-600">*</span>
                  </span>
                  <input
                    type="text"
                    className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                    placeholder="first name"
                    onChange={HandleField}
                    id="firstName"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                    Last Name <span className="text-red-600">*</span>
                  </span>
                  <input
                    type="text"
                    className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                    placeholder="last name"
                    onChange={HandleField}
                    id="lastName"
                  />
                </div>
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                Company Name (Optional)
                </span>
                <input
                  type="text"
                  className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Company Name"
                  onChange={HandleField}
                  id="country"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                  Country <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Country"
                  onChange={HandleField}
                  id="country"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                  Street Address <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Street Address"
                  onChange={HandleField}
                  id="streetAddress"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                  City <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="City"
                  onChange={HandleField}
                  id="city"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                  Post Code <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Post Code"
                  onChange={HandleField}
                  id="postCode"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                  Phone <span className="text-red-600">*</span>
                </span>
                <input
                  type="text"
                  className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Phone"
                  onChange={HandleField}
                  id="phone"
                />
              </div>
              <div className="mt-6 flex w-full flex-col">
                <span className="pb-2 font-DMsans text-base font-bold text-main_font_color">
                  Email <span className="text-red-600">*</span>
                </span>
                <input
                  type="email"
                  className="border-0 border-b-2 pb-4 pl-2 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-secondary_font_color focus:border-b-yellow-500 focus:bg-[#e7e6e6] focus:transition-all focus:duration-300"
                  placeholder="Email"
                  onChange={HandleField}
                  id="email"
                />
              </div>
            </form>
          </div>
          <button
            className="mt-8 bg-main_font_color px-6 py-2 text-lg text-secondary_bg_color"
            onClick={HandleProceed}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutComponent;
