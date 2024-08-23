import React from "react";
import FooterItem from "../FooterItem";
import Flex from "../Flex";
import FooterLogo from "../../../assets/Logo.png";
const FooterTop = () => {
  return (
    <Flex
      className={
        "flex flex-wrap lg:flex-nowrap justify-around sm:justify-between sm:px-5 lg:items-start lg:px-5 xl:px-0 gap-y-10 lg:gap-y-0 items-start sm:items-center"
      }
    >
      <FooterItem
        title={"MENU"}
        allItem={["Home", "Shop", "About", "Contact", "Journal"]}
      />

      <FooterItem
        title={"SHOP"}
        allItem={["Category", "Category", "Category", "Category", "Category"]}
      />

      <FooterItem
        title={"HELP"}
        allItem={[
          "Privacy policy",
          "Terms & Conditions",
          "Special E-shop",
          "Shipping",
          "Secure Payment",
        ]}
      />
  
        <div>
        <div className="text-md font-DMsans font-bold text-main_font_color">
          <a href="#">(025) 611-5711</a>
        </div>
        <div className="text-md mb-4 font-DMsans font-bold text-main_font_color">
          <a href="#">Company@domain.com</a>
        </div>
        <div>
          <address className="font-DMsans text-sm text-footer_text_color">
            254 -allkaslajlkjfosarojflks.USA
          </address>
        </div>
        </div>
        <div className="cursor-pointer">
          <img src={FooterLogo} alt={FooterLogo} />
        </div>
    </Flex>
  );
};

export default FooterTop;
