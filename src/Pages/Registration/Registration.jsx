import React, { useState } from "react";
import RegistrationTop from "../../Component/RegistrationComponent/RegistrationTop/RegistrationTop";
import SignUpInput from "../../Component/RegistrationComponent/SignUpInput/SignUpInput";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Bounce } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/FirebaseConfig";

const Registration = () => {
  const auth = getAuth();
  const [loading, setloading] = useState(false);
  const [userInfo, setuserInfo] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Telephone: "",
    Address1: "",
    Address2: "",
    City: "",
    Division: "",
    District: "",
    PostCode: "",
    password: "",
    Repeatpassword: "",
    agreement: false,
    subscribe1: false,
    subscribe2: false,
  });

  const [userInfoError, setuserInfoError] = useState({
    FirstNameError: "",
    EmailAddressError: "",
    TelephoneError: "",
    Address1Error: "",
    DistrictError: "",
    passwordError: "",
    RepeatpasswordError: "",
    agreementError: false,
    PasswordNotmatch: "",
  });

  // handleuserInput functionality
  const handleuserInput = (e) => {
    if (e.target.checked) {
      setuserInfo({
        ...userInfo,
        [e.target.id]: true,
      });
    } else {
      setuserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSignUp = () => {
    const {
      FirstName,
      EmailAddress,
      Telephone,
      Address1,
      District,
      password,
      Repeatpassword,
      agreement,
    } = userInfo;

    if (!FirstName) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "First name missing",
      });
    } else if (!EmailAddress) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailAddressError: "Email missing",
      });
    } else if (!Telephone) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailAddressError: "",
        TelephoneError: "Telephone missing",
      });
    } else if (!Address1) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailAddressError: "",
        TelephoneError: "",
        Address1Error: "Address1 missing",
      });
    } else if (!District) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailAddressError: "",
        TelephoneError: "",
        Address1Error: "",
        DistrictError: "District missing",
      });
    } else if (!password) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailAddressError: "",
        TelephoneError: "",
        Address1Error: "",
        DistrictError: "",
        passwordError: "Password missing",
      });
    } else if (!Repeatpassword) {
      setuserInfoError({
        FirstNameError: "",
        EmailAddressError: "",
        TelephoneError: "",
        Address1Error: "",
        DistrictError: "",
        passwordError: "",
        RepeatpasswordError: "Repeatpassword missing",
      });
    } else if (password !== Repeatpassword) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailAddressError: "",
        TelephoneError: "",
        Address1Error: "",
        DistrictError: "",
        passwordError: "",
        RepeatpasswordError: "",
        PasswordNotmatch: "Password not match",
      });
    } else if (agreement == false) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailAddressError: "",
        TelephoneError: "",
        Address1Error: "",
        DistrictError: "",
        passwordError: "",
        RepeatpasswordError: "",
        PasswordNotmatch: "",
        agreementError: "Agreement missing",
      });
    } else {
      setloading(true);
      // create user with firebase createUserWithEmailAndPassword
      createUserWithEmailAndPassword(
        auth,
        userInfo.EmailAddress,
        userInfo.password,
      )
        .then((uderCrediential) => {
          toast.info(`${userInfo.FirstName} Registration done`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .then(() => {
          addDoc(collection(db, "users"), userInfo).then((userCredential) => {
            console.log(userCredential);
          }).catch((err)=>{
            console.log(err);
            
          })
        })
        .catch((err) => {
          toast.error(`${err.code}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .finally(() => {
          setloading(false);
          setuserInfo({
            FirstName: "",
            LastName: "",
            EmailAddress: "",
            Telephone: "",
            Address1: "",
            Address2: "",
            City: "",
            Division: "",
            District: "",
            PostCode: "",
            password: "",
            Repeatpassword: "",
            agreement: false,
            subscribe1: false,
            subscribe2: false,
          });
          setuserInfoError({
            ...userInfoError,
            FirstNameError: "",
            EmailAddressError: "",
            TelephoneError: "",
            Address1Error: "",
            DistrictError: "",
            passwordError: "",
            RepeatpasswordError: "",
            PasswordNotmatch: "",
            agreementError: "",
          });
        });
    }
  };
  console.log(userInfo);

  return (
    <div className="py-20">
      <div className="container">
        <RegistrationTop />
        <div className="flex flex-col items-start gap-y-12">
          {/* Personal information */}
          <div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h1 className="mb-5 text-[49px] font-bold text-main_font_color">
                  Your Personal Details
                </h1>
              </div>
              <div className="flex flex-wrap justify-between gap-y-8">
                <div className="basis-2/5">
                  <SignUpInput
                    className={`${userInfoError.FirstNameError ? "border-0 border-b-2 border-red-400 py-4" : "basis-2/5 border-0 border-b-2 border-b-secondary_bg_color py-4"}`}
                    inputType={"text"}
                    placeHolder={"First Name"}
                    labetTitle={"First Name"}
                    inputId={"FirstName"}
                    oninputChange={handleuserInput}
                    value={userInfo.FirstName}
                  />
                  {userInfoError.FirstNameError && (
                    <p className="text-red-400">
                      {userInfoError.FirstNameError}
                    </p>
                  )}
                </div>

                <div className="basis-2/5">
                  <SignUpInput
                    className={
                      "border-0 border-b-2 border-b-secondary_bg_color py-4"
                    }
                    inputType={"text"}
                    placeHolder={"Last Name"}
                    labetTitle={"Last Name"}
                    inputId={"LastName"}
                    oninputChange={handleuserInput}
                    value={userInfo.LastName}
                  />
                </div>

                <div className="basis-2/5">
                  <SignUpInput
                    className={`${userInfoError.EmailAddressError ? "border-0 border-b-2 border-red-400 py-4" : "basis-2/5 border-0 border-b-2 border-b-secondary_bg_color py-4"}`}
                    inputType={"email"}
                    placeHolder={"ska@gmail.com"}
                    labetTitle={"Email Address"}
                    inputId={"EmailAddress"}
                    oninputChange={handleuserInput}
                    value={userInfo.EmailAddress}
                  />
                  {userInfoError.EmailAddressError && (
                    <p className="text-red-400">
                      {userInfoError.EmailAddressError}
                    </p>
                  )}
                </div>

                <div className="basis-2/5">
                  <SignUpInput
                    className={`${userInfoError.TelephoneError ? "border-0 border-b-2 border-red-400 py-4" : "basis-2/5 border-0 border-b-2 border-b-secondary_bg_color py-4"}`}
                    inputType={"number"}
                    placeHolder={"Your phone number"}
                    labetTitle={"Telephone"}
                    inputId={"Telephone"}
                    oninputChange={handleuserInput}
                    value={userInfo.Telephone}
                  />
                  {userInfoError.TelephoneError && (
                    <p className="text-red-400">
                      {userInfoError.TelephoneError}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* Personal information */}

          {/* Customer information */}
          <div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-10">
                <h1 className="mb-5 text-[49px] font-bold text-main_font_color">
                  New Customer
                </h1>
              </div>
              <div className="flex flex-wrap gap-x-20 gap-y-8">
                <div className="basis-2/5">
                  <SignUpInput
                    className={`${userInfoError.Address1Error ? "border-0 border-b-2 border-red-400 py-4" : "basis-2/5 border-0 border-b-2 border-b-secondary_bg_color py-4"}`}
                    inputType={"text"}
                    placeHolder={"R-14, H-11, Black-D Mirpur-6"}
                    labetTitle={"Address-1"}
                    inputId={"Address1"}
                    oninputChange={handleuserInput}
                    value={userInfo.Address1}
                  />
                  {userInfoError.Address1Error && (
                    <p className="text-red-400">
                      {userInfoError.Address1Error}
                    </p>
                  )}
                </div>

                <SignUpInput
                  className={
                    "border-0 border-b-2 border-b-secondary_bg_color py-4"
                  }
                  inputType={"text"}
                  placeHolder={"Rupganj-narayanganj"}
                  labetTitle={"Address-2"}
                  inputId={"Address2"}
                  oninputChange={handleuserInput}
                  value={userInfo.Address2}
                />

                <SignUpInput
                  className={
                    "border-0 border-b-2 border-b-secondary_bg_color py-4"
                  }
                  inputType={"email"}
                  placeHolder={"Your city"}
                  labetTitle={"City"}
                  inputId={"City"}
                  oninputChange={handleuserInput}
                  value={userInfo.City}
                />

                <SignUpInput
                  className={
                    "border-0 border-b-2 border-b-secondary_bg_color py-4"
                  }
                  inputType={"number"}
                  placeHolder={"062635"}
                  labetTitle={"Post Code"}
                  inputId={"PostCode"}
                  oninputChange={handleuserInput}
                  value={userInfo.PostCode}
                />
              </div>
              <div className="mt-5 flex gap-x-20">
                <div className="basis-2/5">
                  <h1 className="mb-3 font-DMsans text-base font-normal text-main_font_color">
                    Division
                  </h1>
                  <select
                    name="Division"
                    id="Division"
                    className="w-full border-0 border-b-2 border-b-secondary_bg_color"
                    onChange={handleuserInput}
                    value={userInfo.Division}
                  >
                    <option value="">Please select</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Narayanganj">Narayanganj</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="joypurhat">joypurhat</option>
                    <option value="Rajshahi">Rajshahi</option>
                  </select>
                </div>
                <div className="basis-2/5">
                  <h1 className="mb-3 font-DMsans text-base font-normal text-main_font_color">
                    District
                  </h1>
                  <select
                    name="District"
                    id="District"
                    className={`${userInfoError.DistrictError ? "w-full border-0 border-b-2 border-b-red-500" : "w-full border-0 border-b-2 border-b-secondary_bg_color"}`}
                    onChange={handleuserInput}
                    value={userInfo.District}
                  >
                    <option value="">Please select</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Narayanganj">Narayanganj</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="joypurhat">joypurhat</option>
                    <option value="Rajshahi">Rajshahi</option>
                  </select>
                  {userInfoError.DistrictError && (
                    <p className="text-red-400">
                      {userInfoError.DistrictError}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* Customer information */}

          {/* Password */}
          <div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-10">
                <h1 className="mb-5 text-[49px] font-bold text-main_font_color">
                  Your Password
                </h1>
              </div>
              <div className="flex flex-wrap justify-between gap-y-8">
                <div className="basis-2/5">
                  <SignUpInput
                    className={`${userInfoError.passwordError ? "border-0 border-b-2 border-red-400 py-4" : "basis-2/5 border-0 border-b-2 border-b-secondary_bg_color py-4"}`}
                    inputType={"password"}
                    placeHolder={"******"}
                    labetTitle={"password"}
                    inputId={"password"}
                    oninputChange={handleuserInput}
                    value={userInfo.password}
                  />
                  {userInfoError.passwordError && (
                    <p className="text-red-400">
                      {userInfoError.passwordError}
                    </p>
                  )}
                </div>

                <div className="basis-2/5">
                  <SignUpInput
                    className={`${userInfoError.RepeatpasswordError ? "border-0 border-b-2 border-red-400 py-4" : "basis-2/5 border-0 border-b-2 border-b-secondary_bg_color py-4"}`}
                    inputType={"password"}
                    placeHolder={"Repeat password"}
                    labetTitle={"Repeat password"}
                    inputId={"Repeatpassword"}
                    oninputChange={handleuserInput}
                    value={userInfo.Repeatpassword}
                  />
                  {userInfoError.RepeatpasswordError && (
                    <p className="text-red-400">
                      {userInfoError.RepeatpasswordError}
                    </p>
                  )}
                </div>
                {userInfoError.PasswordNotmatch && (
                  <p className="text-red-400">
                    {userInfoError.PasswordNotmatch}
                  </p>
                )}
              </div>
            </form>
          </div>
          {/* Password */}

          {/* Check mark information */}
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              onChange={handleuserInput}
              value={userInfo.agreement}
            />
            <p
              className={`${userInfoError.agreementError ? "font-DMsans text-base font-normal text-red-500" : "font-DMsans text-base font-normal text-secondary_font_color"}`}
            >{`${userInfoError.agreementError ? userInfoError.agreementError : "I have read and agree to the private policy"}`}</p>
          </div>
          <div className="flex items-center gap-x-3">
            <p className="font-DMsans text-base font-normal text-secondary_font_color">
              Subscribe Newsletter
            </p>
            <input
              type="checkbox"
              id="subscribe1"
              name="subscribe1"
              onChange={handleuserInput}
              value={userInfo.subscribe1}
            />
            <input
              type="checkbox"
              id="subscribe2"
              name="subscribe2"
              onChange={handleuserInput}
              value={userInfo.subscribe2}
            />
          </div>
          {/* Check mark information */}

          {/* Button info */}
          <div>
            {loading ? (
              <button className="text-md flex items-center gap-x-3 rounded-sm bg-black px-20 py-4 font-DMsans font-bold text-white">
                <div className="h-[30px] w-[30px] animate-spin rounded-full border-b-2 border-t-4 border-white border-t-yellow-200 bg-gradient-to-r from-indigo-500 from-10% via-sky-500"></div>
                Sign up...
              </button>
            ) : (
              <button
                className="text-md rounded-sm bg-black px-20 py-4 font-DMsans font-bold text-white"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            )}
          </div>
          {/* Button info */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
