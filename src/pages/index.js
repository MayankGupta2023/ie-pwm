import React from "react";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-20">
        <Navbar />
      </div>

      <div className="bg-red-600 h-full p-8 flex">

        <div className="bg-red-200 w-1/2">

          <div>

          </div>

        </div>

        <div className="bg-red-400 w-1/2">

        </div>


      </div>
    </div>
  );
}
