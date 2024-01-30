import React from "react";
import Navbar from "../components/navbar";
import notes from "../assets/notes.png"
import Link from "next/link";
import styles from "../styles/landing.module.css"
import Footer from "../components/footer";

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

        <div className={` h-fit w-full m-auto relative bottom-10 text-center text-xl pt-4 pb-12 ${styles.head}`}>
          <div className="flex justify-center text-3xl pt-6 mb-6 font-bold">
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

      <div className={`${styles.grey} pb-12`}>

        <div className="text-center text-5xl font-semibold py-8">
          Key Features
        </div>

        <div className="flex flex-wrap justify-around gap-8">

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>



        </div>

      </div>

      <div className='bg-white pb-12'>

        <div className="text-center text-5xl font-semibold pb-8  pt-12">
          <span className={``}>Personalised Learning</span>
        </div>

        <div className="flex flex-wrap justify-around gap-8">

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

          <div className="h-64 w-96 border-2 border-black rounded-3xl flex justify-center items-center text-center">

            loremm ippsum idor sit A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.

          </div>

        </div>

      </div>

      <div className={`${styles.grey} h-64 flex justify-center items-center px-12`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eget aliquam nisl nisl quis nunc. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eget aliquam nisl nisl quis nunc. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eget aliquam nisl nisl quis nunc. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eget aliquam nisl nisl quis nunc. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eget aliquam nisl nisl quis nunc. Donec euismod, nisl eget fermentum ultricies, nunc nisl ultricies nunc, eget aliquam nisl nisl quis nunc.
      </div>

      <div className="h-96 w-4/5 m-auto flex px-12 py-16 bg-orange-100 my-4">

        <div className="w-1/2">
          <div className="py-4 font-semibold text-3xl">Get Notes On Whatsapp!!</div>
          <div>Lorem ipsum idor sit agrah vagarah ho Lorem ipsum idor
            sit agrah vagarah horem ipsum idor sit agrah vagarah ho Loregarah ho Lorem
            ipsum idor sit agrah vagarah ho Lorem ipsum idor sit agrah vagarah ho
          </div>

          <button className="border-2 border-black px-4 py-2 rounded mt-10">Get On</button>


        </div>

        <div className="w-1/2 ">Get Notes On Whatsapp!!</div>




      </div>

      <div>
        <Footer />
      </div>


    </div >
  );
}
