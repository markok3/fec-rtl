import React, { useState } from "react";
import Switch from "react-switch";
import SunSVG from "@/public/images/svgs/switch/sun.svg";
import LightThemeToggleSVG from "@/public/images/svgs/switch/lightThemeToggle.svg";

const DarkModeSwitch = () => {
  const [checked, setChecked] = useState(true);
  // @ts-ignore
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="example">
      <label htmlFor="">
        <Switch
          className="overflow-hidden "
          checked={checked}
          onChange={handleChange}
          handleDiameter={30}
          onColor="#F2F2F2"
          offColor="#0ff"
          // offHandleColor="#0ff"
          // onHandleColor="#08f"
          height={40}
          width={90}
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "orange",
              }}
            >
              Off
            </div>
          }
          checkedIcon={<SunSVG className="pt-1" />}
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              ☹
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                marginRight: "-4px",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 30,
              }}
            >
              <LightThemeToggleSVG className="w-full flex items-center justify-center" />
            </div>
          }
        />
      </label>
      <p></p>
    </div>
  );
};

export default DarkModeSwitch;
