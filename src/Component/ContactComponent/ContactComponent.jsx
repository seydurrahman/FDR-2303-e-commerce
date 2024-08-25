import React, { useState } from "react";
import BreadCrumb from "../CommonComponent/BreadCrumb/BreadCrumb";
import {
  checkEmail,
  successMessage,
  errorMessage,
  checkWordInMessage,
} from "../../../Utils/Utils";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/FirebaseConfig.js";

const ContactComponent = () => {
  checkEmail("seydurqyrafhh@gmail.com");
  const [inputvalue, setinputvalue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

  // Todo: Handle input function implement
  // @param({e.target.value})

  const handleInput = (event) => {
    setinputvalue({
      ...inputvalue,
      [event.target.id]: event.target.value,
    });
  };

  // todo: handlePost function
  const handlePost = () => {
    const { name, email, message } = inputvalue;
    if (!name) {
      errorMessage("Name missing🤢");
    } else if (!email || !checkEmail(email)) {
      errorMessage("Email not valid or wrong😘");
    } else if (!message || !checkWordInMessage(message)) {
      errorMessage("Message missing😜");
    } else {
      setloading(true);
      addDoc(collection(db, "FormPost"), inputvalue)
        .then((postCredential) => {
          console.log(postCredential);
          successMessage("everything ok👌", "top-center");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setloading(false);
          setinputvalue({
            name: "",
            email: "",
            message: "",
          });
        });
    }
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div>
            <h1 className="font-DMsans text-[49px] font-bold text-main_font_color">
              Contacts
            </h1>
            <BreadCrumb />
          </div>
          <div className="w-1/3 pt-24">
            <h1 className="mb-10 font-DMsans text-[39px] font-bold text-main_font_color">
              Fill up a form
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col items-start justify-start gap-y-10">
                <div className="flex w-full flex-col items-start">
                  <label
                    className="font-DMsans text-base font-normal text-main_font_color"
                    htmlFor="name"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border-0 border-b-2 border-secondary_bg_color pt-6"
                    placeholder="Your name here"
                    onChange={handleInput}
                    value={inputvalue.name}
                  />
                </div>
                <div className="flex w-full flex-col items-start">
                  <label
                    className="font-DMsans text-base font-normal text-main_font_color"
                    htmlFor="name"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border-0 border-b-2 border-secondary_bg_color pt-6"
                    placeholder="Your email here"
                    onChange={handleInput}
                    value={inputvalue.email}
                  />
                </div>
                <div className="flex w-full flex-col items-start">
                  <label
                    className="font-DMsans text-base font-normal text-main_font_color"
                    htmlFor="name"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    className="w-full border-0 border-b-2 border-secondary_bg_color pt-6"
                    placeholder="Your message here"
                    onChange={handleInput}
                    value={inputvalue.message}
                  />
                </div>
              </div>
              <button
                className="rounded-md bg-main_font_color px-32 py-5 text-2xl font-bold text-white mt-3"
                onClick={handlePost}
              >
                {loading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="me-3 inline h-4 w-4 animate-spin text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                Post
              </button>
            </form>
            <div className="my-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.376405059139!2d90.39035027362361!3d23.733953189410823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e90a449e4f%3A0xb7092a9c25197fa4!2sUniversity%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1724605674111!5m2!1sen!2sbd"
                className={"w-[1600px] h-[300px]"}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
