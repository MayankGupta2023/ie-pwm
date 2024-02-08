import React, { useState } from "react";
import Navbar from "../components/navbar";
import notes from "../assets/notes.png"
import Link from "next/link";
import styles from "../styles/landing.module.css"
import Footer from "../components/footer";
import { motion, useAnimation } from "framer-motion";
import plus from "../assets/plus.svg"
import tick from "../assets/cross.svg"

export default function Home() {

  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const [dropicon1, setDropIcon1] = useState(plus.src);
  const [dropicon2, setDropIcon2] = useState(plus.src);
  const [dropicon3, setDropIcon3] = useState(plus.src);
  const handleDrop1 = () => {
    dropicon1==plus.src?setDropIcon1(tick.src):setDropIcon1(plus.src);
    //setDropIcon1(tick.src);
    setDrop1(!drop1);
  }

  const handleDrop2 = () => {
    dropicon2==plus.src?setDropIcon2(tick.src):setDropIcon2(plus.src);
    setDrop2(!drop2);
  }

  const handleDrop3 = () => {
    dropicon3==plus.src?setDropIcon3(tick.src):setDropIcon3(plus.src);
    setDrop3(!drop3);
  }


  const FlippableCard = () => {
  }
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
    <div className={`font-inter`}>

      <div className={`h-16 fixed top-0 left-0 z-50 bg-white w-full `}>
        <Navbar />
      </div>

      {/* <div className={`${styles.page}`}>


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



      </div> */}

      <div className={`h-screen pt-20 ${styles.orange_grad_top}`}>

        <div className="h-2/5 flex w-full justify-center items-end font-black text-5xl text-center px-24">

          <p className={styles.head}>
            Explore AI-driven <span style={{ color: '#bf5252' }}>enhancement</span> through our Note Builder Kickstart

          </p>
        </div>

        <div className="h-3/5 w-full flex justify-center items-center flex-col">
          <p className="text-2xl w-1/2 text-center font-semibold" style={{ color: "#888888" }}>Block build with a modular web design concept will easily kickstart your project, and build website & marketing site faster.</p>
          <div>
            <button className="text-white bg-black py-2 font-semibold px-4 shadow-2xl rounded-lg">Get Started</button>
            <button className=" ml-4 bg-slate-100  px-4 py-2 rounded-lg mt-10 font-semibold text-black">Learn More</button>
          </div>
        </div>

      </div>

      <div className=" h-fit pt-16" >

        <div style={{ color: '#333333' }} className="font-bold text-5xl p-4 text-center">Trusted By Many Learners</div>

        <div className={`flex h-5/6  py-12 px-32 flex-wrap justify-around items-center  ${styles.b1}`}>

          <div style={{ height: '370px' }} className="  mt-6 w-80 shadow-xl overflow-hidden border-2 rounded-2xl ">

            <div className="h-1/4 w-full p-8">
              Name

            </div>

            <div style={{ color: '#666' }} className="h-3/4 w-full p-8">
              Thank You for developing this best platform for learning purpose.
            </div>



          </div>

          <div style={{ height: '370px' }} className=" w-80 mt-6 shadow-xl overflow-hidden border-2 rounded-2xl ">

            <div className="h-1/4 w-full p-8">
              Name

            </div>

            <div style={{ color: '#666' }} className="h-3/4 w-full p-8">
              Thank You for developing this best platform for learning purpose.
            </div>


          </div>

          <div style={{ height: '370px' }} className="  w-80 mt-6 shadow-xl overflow-hidden border-2 rounded-2xl ">


            <div className="h-1/4 w-full p-8">
              Name

            </div>

            <div style={{ color: '#666' }} className="h-3/4 w-full p-8">
              Thank You for developing this best platform for learning purpose.
            </div>

          </div>

        </div>


      </div>

      <div style={{ backgroundColor: '#fff6f3' }} className="min-h-fit h-screen ">

        <div style={{ color: '#333333' }} className="font-bold text-5xl p-4 text-center pt-8">Key Features</div>

     
        <div className="mt-8 min-h-fit  py-12 px-8 flex items-center justify-center gap-8 flex-wrap ">
     

  


{/* <div 
  className="text-center w-80 h-80 bg-red-200 justify-center items-center font-bold flex text-5xl text-white"
  style={{ 
    borderRadius: '3.5rem', 
    backgroundColor: '#fd3c34',
    transition: 'transform 2s ease' // Add transition for smoother animation
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'rotateY(0deg)';
    e.target.textContent = 'Absent'; // Change text content on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'rotateY(360deg)';
    e.target.textContent = 'Live'; // Restore original text content on mouse leave
  }}
>
  Live
</div>  */}

<div 
  className="text-center w-80 h-80 bg-red-200 justify-center items-center font-bold flex text-5xl text-white"
  style={{ 
    borderRadius: '3.5rem', 
    backgroundColor: '#fd3c34',
    transition: 'transform 2s ease' // Add transition for smoother animation
  }}
  onMouseEnter={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(180deg)'; // Flip the card on hover
      span.style.transform = 'rotateY(180deg)'; // Flip the text content
      span.textContent = 'After Content'; // Change text content on hover
    }
  }}
  onMouseLeave={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(0deg)'; // Restore the card's original state
      span.style.transform = 'rotateY(0deg)'; // Restore the text content's original state
      span.textContent = 'Before Content'; // Restore original text content on mouse leave
    }
  }}
>
  <span>Before Content</span>
</div>









  {/* <div className="text-center  w-80 h-80 bg-red-200 justify-center items-center font-bold flex text-3xl px-8 text-white " style={{ borderRadius: '3.5rem', backgroundColor: '#fe6641' }}>

            Will be launched by end of March

          </div> */}

          <div 
  className="text-center w-80 h-80 bg-red-200 justify-center items-center font-bold flex text-5xl px-8 text-white"
  style={{ 
    borderRadius: '3.5rem', 
    backgroundColor: '#fe6641',
    transition: 'transform 2s ease' // Add transition for smoother animation
  }}
  onMouseEnter={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(180deg)'; // Flip the card on hover
      span.style.transform = 'rotateY(180deg)'; // Flip the text content
      span.textContent = 'After Content'; // Change text content on hover
    }
  }}
  onMouseLeave={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(0deg)'; // Restore the card's original state
      span.style.transform = 'rotateY(0deg)'; // Restore the text content's original state
      span.textContent = 'Before Content'; // Restore original text content on mouse leave
    }
  }}
>
  <span>Before Content</span>
</div>






          {/* <div className="text-center  w-80 h-80 bg-red-200 justify-center items-center font-bold flex text-3xl px-8 text-white " style={{ borderRadius: '3.5rem', backgroundColor: '#fe8c4b' }}>

            Will be launched by end of April

          </div> */}
          <div 
  className="text-center w-80 h-80 bg-red-200 justify-center items-center font-bold flex text-5xl px-8 text-white"
  style={{ 
    borderRadius: '3.5rem', 
    backgroundColor: '#fe8c4b',
    transition: 'transform 2s ease' // Add transition for smoother animation
  }}
  onMouseEnter={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(180deg)'; // Flip the card on hover
      span.style.transform = 'rotateY(180deg)'; // Flip the text content
      span.textContent = 'After Content'; // Change text content on hover
    }
  }}
  onMouseLeave={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(0deg)'; // Restore the card's original state
      span.style.transform = 'rotateY(0deg)'; // Restore the text content's original state
      span.textContent = 'Before Content'; // Restore original text content on mouse leave
    }
  }}
>
  <span>Before Content</span>
</div>




          {/* <div className="text-center  w-80 h-80  bg-red-200 justify-center items-center font-bold flex text-3xl px-8 text-white " style={{ borderRadius: '3.5rem', backgroundColor: '#2e180b' }}>

            Will be launched by end of June

          </div> */}
          <div 
  className="text-center w-80 h-80 bg-red-200 justify-center items-center font-bold flex text-5xl px-8 text-white"
  style={{ 
    borderRadius: '3.5rem', 
    backgroundColor: '#2e180b',
    transition: 'transform 2s ease' // Add transition for smoother animation
  }}
  onMouseEnter={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(180deg)'; // Flip the card on hover
      span.style.transform = 'rotateY(180deg)'; // Flip the text content
      span.textContent = 'After Content'; // Change text content on hover
    }
  }}
  onMouseLeave={(e) => {
    const div = e.target;
    const span = div.querySelector('span');
    if (span) {
      div.style.transform = 'rotateY(0deg)'; // Restore the card's original state
      span.style.transform = 'rotateY(0deg)'; // Restore the text content's original state
      span.textContent = 'Before Content'; // Restore original text content on mouse leave
    }
  }}
>
  <span>Before Content</span>
</div>






        </div>


      </div>

      <div className="h-60">

        <div style={{ color: '#333333' }} className="font-bold text-5xl p-4 text-center">Trusted by</div>


      </div>


      <div className={`h-screen ${styles.back}`}>

        <div style={{ color: '#333' }} className={`font-bold text-5xl p-8 text-center`}>Enhance Learning Beyond Tradition with Innovative Features</div>

        <div className="grid grid-cols-3 grid-rows-2 h-5/6">

          <div className="   flex flex-col px-20 justify-center">
            <div className="text-3xl font-bold">Answered Notes</div>
            <div>Top-notch chapter summeries comming to your needs</div>
          </div>
          <div className="   flex flex-col px-20 justify-center">
            <div className="text-3xl font-bold">Interactive Content</div>
            <div>Interective elements to make learning fun and effective</div>
          </div>
          <div className="   flex flex-col px-20 justify-center">
            <div className="text-3xl font-bold">Offline Access</div>
            <div>Access your learning material without an internet connection</div>
          </div>
          <div className="   flex flex-col px-20 justify-center">
            <div className="text-3xl font-bold">Language Support</div>
            <div>Break language barrier and learn it. Opt language you're comfortable with.</div>
          </div>
          <div className="   flex flex-col px-20 justify-center">
            <div className="text-3xl font-bold">Custom Notes</div>
            <div>Ypur notes ypur way. Customise your learning with us.</div>
          </div>
          <div className="   flex flex-col px-20 justify-center">
            <div className="text-3xl font-bold">Subject Specific Content</div>
            <div>Dive into extensive database connection business studies and progeamm.</div>
          </div>




        </div>

      </div>






      <div className="h-screen w-full flex px-12 py-16 ">

        <div className="w-1/2 flex flex-col justify-center items-center gap-8">
          <div className=" w-96 font-bold text-5xl">Get your notes via WhatsApp</div>
          <div className="   text-xl text-stone-500 font-semibold">
            <p className="w-96">
              Never hesitate to ask questions, even if you're not on a web browser, whenever it suits you.
            </p>
            <button className="text-white bg-black py-2 font-semibold px-4 shadow-2xl rounded-lg text-base">Get Started</button>
            <button className=" ml-4 bg-slate-100  px-4 py-2 rounded-lg mt-10 font-semibold text-black text-base">Learn More</button>

          </div>



        </div>

        <div className="w-1/2 h-screen ">
          <img className="h-full w-full" src="https://framerusercontent.com/images/dAJW9yDkvqMtYUWnpXJiJ2wKsA.jpg?scale-down-to=1024" />
        </div>

      </div>



      <div className=" h-fit pt-16" >

        <div className="font-bold text-5xl p-4">Latest Updates</div>

        <div className={`flex h-5/6  py-12 px-32 flex-wrap justify-center items-center  ${styles.b1}`}>

          <div style={{ height: '430px' }} className="  my-6  w-80 shadow-xl overflow-hidden border-2 rounded-2xl ">
            <div className="h-1/2 w-full">
              <img className="h-full w-full" />
            </div>
            <div className="flex flex-col justify-around align-start px-12 h-1/2  ">

              <div className="text-2xl font-semibold">Blogs</div>
              <div className="text-stone-500">Learn about hosting build scale and reliability.</div>
              <button className="w-fit px-4 py-2 bg-black text-white rounded-lg">Read More</button>

            </div>


          </div>

          <div style={{ height: '430px' }} className=" w-80 my-6 mx-4  shadow-xl overflow-hidden border-2 rounded-2xl ">
            <div className="h-1/2 w-full">
              <img className="h-full w-full" />
            </div>
            <div className="flex flex-col justify-around align-start px-12 h-1/2  ">

              <div className="text-2xl font-semibold">Blogs</div>
              <div className="text-stone-500">Learn about hosting build scale and reliability.</div>
              <button className="w-fit px-4 py-2 bg-black text-white rounded-lg">Read More</button>

            </div>


          </div>

          <div style={{ height: '430px' }} className="  w-80 my-6  shadow-xl overflow-hidden border-2 rounded-2xl ">
            <div className="h-1/2 w-full">
              <img className="h-full w-full" />
            </div>
            <div className="flex flex-col justify-around align-start px-12 h-1/2  ">

              <div className="text-2xl font-semibold">Blogs</div>
              <div className="text-stone-500">Learn about hosting build scale and reliability.</div>
              <button className="w-fit px-4 py-2 bg-black text-white rounded-lg">Read More</button>

            </div>


          </div>

        </div>


      </div>

      <div className="h-screen w-full flex flex-col gap-32 pt-30 items-center justify-center">

        <div className="font-bold text-5xl text-zinc-800">Frequently Asked Questions</div>

        <motion.div
          className="max-h-1/2 w-3/5 bg-stone-100 rounded-2xl ">
          <div className="h-fit p-4 text-lg font-semibold flex justify-center flex-col ">
            <div style={{ color: '#333333' }} className="h-fit flex gap-6 hover:cursor-pointer" onClick={() => { handleDrop1() }}> <img src={dropicon1} />  What is Framer?</div>
            {drop1 ? <motion.div style={{ color: '#666666' }} className="  h-fit pt-4 px-10 text-lg font-semibold flex items-center">
              Framer is web builder for creative pros. Be sure to check out framer.com to learn more.
            </motion.div> : null}
            <br></br>
            <hr></hr>
          </div>
          <div className="h-fit  p-4 text-lg font-semibold flex justify-center flex-col">
            <div style={{ color: '#333333' }} className=" hover:cursor-pointer h-fit flex gap-6" onClick={() => { handleDrop2() }}> <img src={dropicon2} />  Is it easy to learn?</div>
            {drop2 ? <motion.div style={{ color: '#666666' }}
              className="h-fit pt-4 px-10 text-lg font-semibold flex items-center">
              Framer is fastest tool to build sites with, because you can ship your design immidiatly,insted of rebuilding it in code or second tool.
            </motion.div> : null}
            <br></br>
            <hr className=""></hr>
          </div>
          <div style={{ color: '#333333' }} className=" hover:cursor-pointer h-fit  p-4 text-lg font-semibold flex justify-center flex-col">
            <div className="h-fit flex gap-6" onClick={() => { handleDrop3() }}> <img src={dropicon3} />  Do i need to code?</div>
            {drop3 ? <motion.div style={{ color: '#666666' }}

              className="h-fit pt-4 px-10 text-lg font-semibold flex items-center">
              Framer is web builder for creative pros. Be sure to check out framer.com to learn more.
            </motion.div> : null}
        
          </div>

        </motion.div>



      </div>

      <div className={` h-64 ${styles.orange_grad}`}>

        <div className="h-full flex flex-col items-center justify-center gap-8">

          <div className="text-white text-6xl font-bold">Sign up today.</div>

          <div className="flex gap-6">
            <button className="text-black bg-slate-100 font-semibold py-2 px-4 shadow-2xl rounded-lg">Learn more</button>
            <button className="text-white bg-black py-2 font-semibold px-4 shadow-2xl rounded-lg">Get Stared</button>

          </div>



        </div>

      </div>

      <div className="h-96">
        <Footer />
      </div>


    </div >
  );
}
