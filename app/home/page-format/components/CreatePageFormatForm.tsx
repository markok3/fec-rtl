import React, { useState } from "react";
import UploadButton from "../../card-format/components/UploadButton";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import SelectColorDropdown from "../../card-format/components/SelectColorDropdown";
import { useIntl } from "react-intl";

interface CreatePageFormatFormProps {
  setPageFormat: React.Dispatch<
    React.SetStateAction<{
      logo: string | null;
      image: string | null;
      selectedColor: string | null;
      message: string | null;
    }>
  >;
}

const CreatePageFormatForm: React.FC<CreatePageFormatFormProps> = ({
  setPageFormat,
}) => {
  const intl = useIntl(); // Initialize the useIntl hook

  const [logo, setLogo] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("1D2D50");
  const [message, setMessage] = useState<string>("");

  const handleSave = () => {
    const stateObject = {
      logo: logo,
      image: image,
      selectedColor: selectedColor,
      message: message,
    };

    // MAKE API CALL TO SAVE PAGE FORMAT
    console.log(stateObject);
  };

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
      message: message,
    };
    console.log(stateObject);

    setPageFormat(stateObject);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-4 gap-y-10 ">
        <div className="">
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            {intl.formatMessage({ id: "pageformat.form.logo" })}
          </h2>
          <p className="text-sm mt-2 md:mt-0 md:text-medium text-themeGray max-w-[250px]">
            {intl.formatMessage({ id: "pageformat.form.logoDescription" })}
          </p>
        </div>

        <div className="flex just-center">
          <UploadButton onUpload={handleImageUpload} id="logo" />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            {intl.formatMessage({ id: "pageformat.form.image" })}
          </h2>
          <p className="text-sm mt-2 md:mt-0 md:text-medium text-themeGray max-w-[250px]">
            {intl.formatMessage({ id: "pageformat.form.imageDescription" })}
          </p>
        </div>
        <div className="flex just-center ">
          <UploadButton onUpload={handleImageUpload2} id="bgImage" />
        </div>

        <div className="">
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            {intl.formatMessage({ id: "pageformat.form.color" })}
          </h2>
          <p className="text-sm mt-2 md:mt-0 md:text-medium text-themeGray max-w-[250px]">
            {intl.formatMessage({ id: "pageformat.form.colorDescription" })}
          </p>
        </div>
        <div className="flex justify-end md:justify-center ">
          <SelectColorDropdown
            className="w-[100px] mt-2"
            setSelectedColor={setSelectedColor}
          />
        </div>

        <div className="">
          <h2 className="text-xl md:text-2xl font-semibold text-blue">
            {intl.formatMessage({ id: "pageformat.form.message" })}
          </h2>
          <p className="text-sm mt-2 md:mt-0 md:text-medium text-themeGray max-w-[250px]">
            {intl.formatMessage({ id: "pageformat.form.messageDescription" })}
          </p>
        </div>
        <div className="flex justify-end md:justify-center ">
          <textarea
            className="w-[150px] md:w-[200px] mt-2 border-themeGray border-2 rounded-xl px-2 py-1 text-themeGray"
            onChange={(e) => setMessage(e.target.value)}
            placeholder={intl.formatMessage({
              id: "pageformat.form.messageDescription",
            })}
          ></textarea>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <PrimaryButton
          label={intl.formatMessage({ id: "pageformat.form.previewButton" })}
          className="text-xl font-semibold w-1/2 py-2"
          onClick={handlePreview}
        />
        <PrimaryButton
          label={intl.formatMessage({ id: "pageformat.form.saveButton" })}
          className="text-xl font-semibold w-1/2 py-2"
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default CreatePageFormatForm;
