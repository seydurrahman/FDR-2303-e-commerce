import React from "react";
import Button from "./Button";
const Overlay = ({
  className,
  title,
  discountDetailsFirst,
  discountDetailsLast,
  discountAmount,
  btnTitle,
}) => {
  return (
    <>
      <div className={`absolute ${className}`}>
        <h3 className="font-DMsans text-3xl md:text-[39px] font-bold text-main_font_color">
          {title ? title : "Phones Sales"}
        </h3>
        <p className="md:mt-3 md:mb-2 font-DMsans text-base font-normal text-main_font_color opacity-75">
          {discountDetailsFirst}
          <span className="align-middle text-4xl font-bold">
            {discountAmount}
          </span>
          {discountDetailsLast}
        </p>
        <Button
          className={
            "bg-main_font_color py-2 px-6 font-DMsans text-sm font-bold text-main_bg_color hover:bg-slate-700"
          }
          title={btnTitle}
        />
      </div>
    </>
  );
};

export default Overlay;
