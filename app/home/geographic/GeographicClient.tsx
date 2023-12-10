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

const GeographicClient = () => {
  const [message, setMessage] = React.useState("");
  const position: LatLngTuple = [51.505, -0.09];
  const customIcon = new Icon({
    iconUrl: FaMapMarkerAlt,
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  console.log(message);

  const handleSave = () => {
    // MAKE API CALL TO SAVE PAGE FORMAT AND IMPLEMENT YOUR OWN MAP API
    console.log(message);
  };

  return (
    <div>
      <Navbar title="Geographic"></Navbar>
      <div className="flex justify-center mt-5">
        <div className="w-[95%]">
          <Input
            label="Message"
            placeholder="Write Your Message Here..."
            className="h-32"
            onChange={(event) => setMessage(event.target.value)}
          />
          <PrimaryButton
            label="Save"
            className="w-20 h-10 mt-2 mb-5"
            onClick={handleSave}
          />

          <div className="">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "60vh", width: "100%" }}
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
