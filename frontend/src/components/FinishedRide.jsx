import React from "react";
import { Link } from "react-router-dom";

const FinishedRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setFinishedRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Finished Ride! please travel again
      </h3>
      <div className="flex p-3 items-center bg-yellow-200 rounded-lg justify-between mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="font-medium text-lg">Shahil khan</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-cente gap-5 p-3 border-b-2">
            <i className="ri-crosshair-2-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">562-11-8</h3>
              <p className="text-small -mt-1 text-gray-600 ">
                school, andheri east
              </p>
            </div>
          </div>
          <div className="flex items-cente gap-5 p-3 border-b-2">
            <i className="text-lg ri-focus-3-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562-11-8</h3>
              <p className="text-small -mt-1 text-gray-600 ">
                school, andheri east
              </p>
            </div>
          </div>
          <div className="flex items-cente gap-5 p-3 border-b-2">
            <i className="ri-currency-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">₹198.10</h3>
              <p className="text-small -mt-1 text-gray-600 ">Cash cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Link
            to="/captain-home"
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="w-full flex justify-center bg-green-300 text-green-600 text-lg font-semibold mt-3 p-2 rounded-lg"
          >
            Finish Ride
          </Link>

          <p className="text-red-500 mt-10 text-xs">
            Click on finish button ride if you have completed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishedRide;
