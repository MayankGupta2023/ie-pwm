import React from "react";
import Navbar from "../components/navbar";
import notes from "../assets/notes.png"
import Link from "next/link";
import styles from "../styles/landing.module.css"

export default function Home() {

  const SquarePattern = () => {
    return (
      <div className={`grid overflow-hidden ${styles.gridd}`}>
        {Array.from({ length: 120 }, (_, index) => (
          <div key={index} className={`h-16 w-16 relative right-8 ${styles.grid_items}`}></div>
        ))}
      </div>
    );
  };


  return (
    <div className={`h-auto flex flex-col ${styles.landing}`}>

      <div className={`h-64 ${styles.navbar}`}>
        <Navbar />
      </div>

      <div className={`${styles.page}`}>


        <div className="">
          <SquarePattern />
        </div>

        <div className={` h-72 w-full m-auto relative bottom-10 text-center text-xl pt-4 ${styles.head}`}>
          <div className="flex justify-center text-3xl pt-8 mb-6 font-bold">
            Get a&nbsp;<span className={styles.kickstart}>Kickstart</span> &nbsp;boost with our&nbsp;<span className={styles.ai}>AI</span>&nbsp;note Generator
          </div>

          Block build with a modular web design concept will easily kickstart your project, and build website & marketing site faster.

          <div className="h-12 flex items-center justify-center mt-6">
            <button className={` border-green border-2 px-12 py-2 text-2xl rounded ${styles.buttons}`}>Get started</button>
          </div>

        </div>

        <div>

        </div>



      </div>

      <div className="h-screen bg-red-400 flex ">

        <div className="h-64 w-96 bg-red-500">

        </div>


        <div className="h-64 w-96 bg-red-500">

        </div>


        <div className="h-64 w-96 bg-red-500">

        </div>


        <div className="h-64 w-96 bg-red-500">

        </div>

      </div>


    </div>
  );
}
