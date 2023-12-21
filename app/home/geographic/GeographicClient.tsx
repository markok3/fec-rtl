"use client";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { Icon } from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useIntl } from "react-intl";

const GeographicClient = () => {
  const intl = useIntl();
  const [message, setMessage] = React.useState("");
  const position: LatLngTuple = [51.505, -0.09];
  const customIcon = new Icon({
    iconUrl: FaMapMarkerAlt,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const handleSave = () => {
    // MAKE API CALL TO SAVE MESSAGE AND IMPLEMENT YOUR OWN MAP API
    console.log(message);
  };

  return (
    <div>
      {/* @ts-ignore */}
      <Navbar title={intl.formatMessage({ id: "geographic.title" })}></Navbar>
      <div className="flex justify-center mt-5">
        <div className="w-[95%]">
          <Input
            label={intl.formatMessage({ id: "geographic.message.label" })}
            placeholder={intl.formatMessage({
              id: "geographic.message.placeholder",
            })}
            className="h-32"
            onChange={(event) => setMessage(event.target.value)}
          />
          <PrimaryButton
            label={intl.formatMessage({ id: "geographic.saveButton.label" })}
            className="w-20 h-10 mt-2 mb-5"
            onClick={handleSave}
          />

          <div className="z-10 mb-5">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "60vh", width: "100%", zIndex: 0 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicClient;
