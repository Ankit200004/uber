import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishedRide from "../components/FinishedRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishedRidePanel, setFinishedRidePanel] = useState(false);

  const finishedRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishedRidePanel) {
        gsap.to(finishedRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishedRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishedRidePanel]
  );

  return (
    <div className="h-screen relatives">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div
        onClick={() => {
          setFinishedRidePanel(true);
        }}
        className="h-1/5 p-6 flex items-center relative justify-between bg-yellow-200"
      >
        <h5
          className="p-1 text-center absolute w-[95%] top-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-black ri-arrow-down-wide-fill"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="w-full flex justify-center bg-green-600 text-white font-semibold mt-3 p-2 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishedRidePanelRef}
        className="fixed w-full bg-white z-10 translate-y-full bottom-0 h-[90%] pt-12 py-10 px-3"
      >
        <FinishedRide setFinishedRidePanel={setFinishedRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
