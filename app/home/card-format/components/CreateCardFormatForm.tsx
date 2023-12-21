import React, { useState } from "react";
import UploadButton from "./UploadButton";
import PointsCalculatorButton from "./PointsCalculatorButtons";
import SelectColorDropdown from "./SelectColorDropdown";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { useIntl } from "react-intl";

interface CreateCardFormatFormProps {
  setCardFormat: React.Dispatch<
    React.SetStateAction<{
      logo: string | null;
      image: string | null;
      selectedColor: string | null;
      stamps?: number;
      points?: number;
    }>
  >;
  clientType: string;
}

const CreateCardFormatForm: React.FC<CreateCardFormatFormProps> = ({
  setCardFormat,
  clientType,
}) => {
  const intl = useIntl();

  const [logo, setLogo] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("1D2D50");
  const [stamps, setStamps] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);

  // logo image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreview = () => {
    const stateObject = {
      logo: logo,
      image: image,
      selectedColor: selectedColor,
    };

    setCardFormat(stateObject);
  };

  const handleSave = () => {
    let stateObject = {};
    if (clientType === "stamps") {
      stateObject = {
        logo: logo,
        image: image,
        selectedColor: selectedColor,
        stamps: stamps,
      };
    } else {
      stateObject = {
        logo: logo,
        image: image,
        selectedColor: selectedColor,
        points: points,
      };
    }

    console.log(stateObject);

    // TODO: SAVE TO API
  };

  return (
    <div>
      <div className="grid grid-cols-2  sm:grid-cols-2 sm:grid-rows-4 gap-y-10">
        <div className="">
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            {intl.formatMessage({ id: "cardformat.form.logo" })}
          </h2>
          <p className="text-sm mt-2 md:mt-0 md:text-medium text-themeGray max-w-[250px]">
            {intl.formatMessage({ id: "cardformat.form.logoDescription" })}
          </p>
        </div>

        <div className="flex justify-center">
          <UploadButton onUpload={handleImageUpload} id="logo" />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            {intl.formatMessage({ id: "cardformat.form.image" })}
          </h2>
          <p className="text-sm md:text-medium text-themeGray max-w-[250px]">
            {intl.formatMessage({ id: "cardformat.form.imageDescription" })}
          </p>
        </div>
        <div className="flex just-center ">
          <UploadButton onUpload={handleImageUpload2} id="bgImage" />
        </div>

        {clientType === "stamps" ? (
          <>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue">
                {intl.formatMessage({ id: "cardformat.form.stampsTemplate" })}
              </h2>
              <p className="text-sm md:text-medium text-themeGray max-w-[250px]">
                {intl.formatMessage({
                  id: "cardformat.form.stampsTemplateDescription",
                })}
              </p>
            </div>
            <div className="flex justify-end md:justify-center">
              <span className="text-2xl font-bold text-themeGray mt-2 cursor-pointer">
                {intl.formatMessage({ id: "cardformat.form.choose" })}
              </span>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue">
                {intl.formatMessage({ id: "cardformat.form.totalStamps" })}
              </h2>
              <p className="text-sm md:text-medium text-themeGray max-w-[250px]">
                {intl.formatMessage({
                  id: "cardformat.form.totalStampsDescription",
                })}
              </p>
            </div>
            <div className="flex justify-end md:justify-center">
              <PointsCalculatorButton points={stamps} setPoints={setStamps} />
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue">
                {intl.formatMessage({ id: "cardformat.form.pointsCalculator" })}
              </h2>
              <p className="text-sm md:text-medium text-themeGray">
                {intl.formatMessage({
                  id: "cardformat.form.pointsCalculatorDescription",
                })}
              </p>
            </div>
            <div className="flex justify-end md:justify-center ">
              <PointsCalculatorButton points={points} setPoints={setPoints} />
            </div>
          </>
        )}

        <div className="">
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            {intl.formatMessage({ id: "cardformat.form.color" })}
          </h2>
          <p className="text-sm md:text-medium text-themeGray">
            {intl.formatMessage({ id: "cardformat.form.colorDescription" })}
          </p>
        </div>
        <div className="flex justify-end md:justify-center ">
          <SelectColorDropdown
            className="w-[100px] mt-2"
            setSelectedColor={setSelectedColor}
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <PrimaryButton
          label={intl.formatMessage({ id: "cardformat.form.previewButton" })}
          className="text-xl font-semibold w-1/2 py-2 "
          onClick={handlePreview}
        />
        <PrimaryButton
          label={intl.formatMessage({ id: "cardformat.form.saveButton" })}
          className="text-xl font-semibold w-1/2 py-2 "
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default CreateCardFormatForm;
