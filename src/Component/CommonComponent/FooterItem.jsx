import React from "react";

const FooterItem = ({ allItem = ["one", "Two", "Three", "Four"], title }) => {
  return (
    <>
      <div className="w-1/4">
        <h2 className="text-md mb-4 font-DMsans font-bold text-main_font_color">
          {title}
        </h2>
        <ul>
          {allItem?.map((item, index) => (
            <li className="py-2 font-DMsans text-sm text-footer_text_color">
              <a href="#">
                {title.toLocaleLowerCase() === "SHOP".toLocaleLowerCase()
                  ? item + (index + 1)
                  : item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterItem;
