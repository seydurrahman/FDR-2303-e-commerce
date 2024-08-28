import { toast, Bounce } from "react-toastify";

function checkWordInMessage(message) {
  return message.length >= 100 ? false:true
}

function checkEmail(email = "seydurrahman@gmail.com") {
  const regexPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isEmailValidate = regexPattern.test(email.toLocaleLowerCase());
  return isEmailValidate
}

function successMessage(
  Message = "seydur",
  position = "top-right",
  delay = 4000,
) {
  toast.success(Message, {
    position: position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

function errorMessage(
  ErrorMessage = "something is wrong",
  position = "top-right",
  delay = 4000,
) {
  toast.error(ErrorMessage, {
    position: position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {width:"500px"},
    transition: Bounce,
  });
}

export { checkEmail, successMessage, errorMessage , checkWordInMessage};
