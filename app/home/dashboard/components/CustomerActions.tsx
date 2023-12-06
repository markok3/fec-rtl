import ButtonWithIcon from "@/app/components/buttons/ButtonWithIcon";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import React from "react";

import { IoMdPersonAdd } from "react-icons/io";
import { MdAddBox } from "react-icons/md";

const CustomerActions = () => {
  return (
    <div>
      <div className="flex flex-row px-10 py-4 items-center justify-between">
        <h3 className="text-xl text-themeGray">Last Customers</h3>

        <div className="flex flex-row gap-4 items-center">
          <PrimaryButton label="Share your page" className="px-4 py-2" />
          <ButtonWithIcon
            Icon={IoMdPersonAdd}
            label="Add customer"
            className="px-4 py-2"
          />
          <ButtonWithIcon
            Icon={MdAddBox}
            label="Record"
            className="px-4 py-2"
          />
          <ButtonWithIcon
            Icon={MdAddBox}
            label="Redeem"
            className="px-4 py-2"
          />

          {/* <AddCustomerSVG className="w-10 h-auto text-black bg-black" /> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerActions;
