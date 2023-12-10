import ButtonWithIcon from "@/app/components/buttons/ButtonWithIcon";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import useCreateCustomerModal from "@/app/hooks/useCreateCustomerModal";
import useRecordPointsModal from "@/app/hooks/useRecordPointsModal";
import useRedeemRewardsModal from "@/app/hooks/useRedeemRewardsModal";
import useShareYourPageModal from "@/app/hooks/useShareYourPageModal";
import React from "react";

import { IoMdPersonAdd } from "react-icons/io";
import { MdAddBox } from "react-icons/md";

const CustomerActions = () => {
  const createCustomer = useCreateCustomerModal();
  const recordPoints = useRecordPointsModal();
  const redeemRewards = useRedeemRewardsModal();
  const shareYourPage = useShareYourPageModal();

  return (
    <div>
      <div className="flex flex-col md:flex-row px-10 py-4 items-center justify-between">
        <h3 className="text-xl text-themeGray">Last Customers</h3>

        <div className="flex flex-row gap-4 items-center mt-3 ">
          <PrimaryButton
            label="Share your page"
            className="px-4 py-2"
            onClick={() => shareYourPage.onOpen()}
          />
          <ButtonWithIcon
            Icon={IoMdPersonAdd}
            label="Add customer"
            className="px-4 py-3 md:py-2"
            onClick={() => createCustomer.onOpen()}
          />
          <ButtonWithIcon
            Icon={MdAddBox}
            label="Record"
            className="px-4 py-3 md:py-2 hidden md:flex"
            onClick={() => recordPoints.onOpen()}
          />
          <ButtonWithIcon
            Icon={MdAddBox}
            label="Redeem"
            className="px-4 py-3 md:py-2"
            onClick={() => redeemRewards.onOpen()}
          />

          {/* <AddCustomerSVG className="w-10 h-auto text-black bg-black" /> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerActions;
