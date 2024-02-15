import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import MakePaymentComponent from '../components/MakePaymentComponent';
import Footer from '../components/footer';
import Switch from 'react-switch';
import '../styles/pricing.module.css'; // Import any additional styles for styling the switch
import tick from '../assets/tick.svg';
import plus from "../assets/plus.svg"
import cross from "../assets/cross.svg"
import style from '../styles/landing.module.css';





const cardVariants = {
  initial: { scale: 1, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' },
  hover: {
    scale: 1.15,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const headingVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const headingColorTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 2,
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

const containerStyle = {
  backgroundColor: 'white',
};

const Pricing = () => {
  const [showMonthlyPlans, setShowMonthlyPlans] = useState(false);
  const [dropicon1, setDropIcon1] = useState(plus.src);
  const [dropicon2, setDropIcon2] = useState(plus.src);
  const [dropicon3, setDropIcon3] = useState(plus.src);
  const handleToggleSwitch = () => {
    setShowMonthlyPlans(!showMonthlyPlans);
  };

  const monthlyPlans = [
    { title: 'Starter Spark', price: 129, credits: 50, questions: 100, highlight: false },
    { title: 'Genius Nexus', price: 479, credits: 190, questions: 370, highlight: true },
    { title: 'Mindscape Master', price: 649, credits: 250, questions: 500, highlight: false },
    { title: 'Try', price: 219, credits: 60, questions: 120, highlight: false },



  ];

  const yearlyPlans = [

    { title: 'Yearly Plan 1', price: 129, credits: 50, questions: 100, highlight: false },
    { title: 'Yearly Plan 2', price: 479, credits: 190, questions: 370, highlight: true },
    { title: 'Yearly Plan 3', price: 649, credits: 250, questions: 500, highlight: false },
    { title: 'Try', price: 219, credits: 100, questions: 200, highlight: false },

  ];

  const selectedPlans = showMonthlyPlans ? yearlyPlans : monthlyPlans;

  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);

  const handleDrop1 = () => {
    dropicon1 == plus.src ? setDropIcon1(cross.src) : setDropIcon1(plus.src);
    setDrop1(!drop1);
  }

  const handleDrop2 = () => {
    dropicon2 == plus.src ? setDropIcon2(cross.src) : setDropIcon2(plus.src);
    setDrop2(!drop2);
  }

  const handleDrop3 = () => {
    dropicon3 == plus.src ? setDropIcon3(cross.src) : setDropIcon3(plus.src);
    setDrop3(!drop3);
  }


  return (
    <div className='flex flex-col min-h-screen'>
      <div className='h-20'>
        <Navbar />
      </div>
      <div className="flex-grow ml-10 mr-10 flex flex-col items-center pt-4 " style={containerStyle}>

        <div style={{ color: "#333333" }} className="text-5xl font-semibold text-center w-full mb-6 text-sky-950">
          Choose the right plan for your learning
        </div>

        <div class={`bg-white w-full  toggle-switch-container  mb-8 mr-40 flex justify-end ${style.toggle}`}>
          <div className={`py-0.5 px-0.5 rounded-full flex relative ${style.pricing}`}>
            <div class="flex flex-row">
              <button
                class={`toggle-btn text-3xl focus:outline-none text-black relative z-20 p-2 rounded-full ${!showMonthlyPlans ? 'bg-white' : ''}`}
                onClick={() => handleToggleSwitch(true)}
              >
                Monthly
              </button>

              <div class="px-2"></div>

              <button
                class={`toggle-btn text-3xl focus:outline-none text-black relative p-2 z-20 rounded-full ${showMonthlyPlans ? 'bg-white' : ''}`}
                onClick={() => handleToggleSwitch(true)}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>


        <div className=" flex flex-wrap items-center w-4/5 justify-around h-fit">
          {selectedPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className={`bg-white px-8 py-4 my-4 mx-2 rounded-3xl shadow-md flex flex-col py-6 w-80 min-h-80 h-fit ${style.card}`}
            >
              <h3 style={{ color: "#6e4245" }} className={`text-lg font-bold text-slate-500 mb-0 flex  items-center justify-start ${style.title}`}>{plan.title}</h3>
              <h3 style={{ color: "#333333" }} className={`text-5xl font-bold  text-slate-800 mb-0 flex mt-6 mb-6 items-end justify-start ${style.price}`}>₹ {plan.price} <span style={{ color: "#666666" }} className='text-lg'> &nbsp; {index==3?<span>only</span>: <span>/month</span> }</span> </h3>
              <div className="text-gray-900 mb-4">
                <ul className="list-disc list-inside ">
                  <li className='list-none mb-2 ' style={{ color: '#71717a' }}>
                    <span className='flex gap-4' style={{ color: 'grey' }}> <img src={tick.src} />Credits : {plan.credits}</span>
                  </li>
                  <li className='list-none' style={{ color: '#71717a' }}>
                    <span className='flex gap-4' style={{ color: 'grey' }}><img src={tick.src} /> Questions : {plan.questions}</span>
                  </li>

                </ul>
                <div className="mt-6 mb-2 flex items-center justify-left">
                  <MakePaymentComponent amount={plan.price} description={plan.title}
                    credits={plan.credits} plan={plan.title} highlight={plan.highlight} />
                </div>

              </div>
            </motion.div>
          ))}
          <motion.div

            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className={`bg-white px-8 py-4 my-4 mx-2 rounded-3xl shadow-md flex flex-col py-6 w-96 min-h-80 h-fit `}
          >
            <h3 style={{ color: "#6e4245" }} className="text-lg font-bold text-slate-500 mb-0 flex  items-center justify-start">{"Customize"}</h3>
            <h3 style={{ color: "#333333" }} className={`text-4xl font-bold  text-slate-800 mb-0 flex mt-6 mb-6 items-end justify-start ${style.price}`}>Adding Soon<span style={{ color: "#666666" }} className='text-lg'> &nbsp; </span> </h3>
            <div className="text-gray-900 mb-4">
              <ul className="list-disc list-inside ">
                <li className='list-none mb-2 ' style={{ color: '#71717a' }}>
                  <span className='flex gap-4' style={{ color: 'grey' }}> <img src={tick.src} />Credits : {100}</span>
                </li>
                <li className='list-none' style={{ color: '#71717a' }}>
                  <span className='flex gap-4' style={{ color: 'grey' }}><img src={tick.src} /> Questions : {200}</span>
                </li>

              </ul>
              <div className="mt-6 mb-2 flex items-center justify-left">
                <MakePaymentComponent amount={200} description={"test"}
                  credits={40} plan={"see"} highlight={false} />
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <div className='flex flex-row mr-64 ml-64 pl-16 mt-8'>




      </div>
      <div className={`flex justify-center  font-inter items-center my-8 gap-4 text-center px-10 ${style.chat}`}>
        <p className={`text-md leading-8 min-w-96 w-1/2 ${style.chat2}`}>
          Uncertaing about your selection? Direct message us, and we will assist you in making choice.

        </p>
        <button style={{ backgroundColor: "#3cba81" }} className='py-1 w-32 px-4 bg-green-400 text-white rounded-lg'>
          Chat Now
        </button>
      </div>


      <div className="h-5/6 py-32 pb-4 min-h-fit w-full flex flex-col gap-32  items-center justify-center">

        <div className={`font-bold text-center text-5xl text-zinc-800 ${style.head}`}>Frequently Asked Questions</div>

        <motion.div
          className={`max-h-1/2 w-3/5 bg-stone-100 rounded-2xl ${style.framer}`}>
          <div className="h-fit  p-4 text-lg font-semibold flex justify-center flex-col">
            <div style={{ color: '#333333' }} className="h-fit flex gap-6 hover:cursor-pointer" onClick={() => { handleDrop1() }}> <img src={dropicon1} />  What is Framer?</div>
            {drop1 ? <motion.div style={{ color: '#666666' }} className={`h-fit px-10 text-lg font-semibold flex items-center ${style.framer2}`}>
              Framer is web builder for creative pros. Be sure to check out framer.com to learn more.
            </motion.div> : null}
          </div>
          <div className="h-fit  p-4 text-lg font-semibold flex justify-center flex-col">
            <div style={{ color: '#333333' }} className=" hover:cursor-pointer h-fit flex gap-6" onClick={() => { handleDrop2() }}> <img src={dropicon2} />  Is it easy to learn?</div>
            {drop2 ? <motion.div style={{ color: '#666666' }}
              className={`h-fit px-10 text-lg font-semibold flex items-center ${style.framer2}`}>
              Framer is fastest tool to build sites with, because you can ship your design immidiatly,insted of rebuilding it in code or second tool.
            </motion.div> : null}
          </div>
          <div style={{ color: '#333333' }} className=" hover:cursor-pointer h-fit  p-4 text-lg font-semibold flex justify-center flex-col">
            <div className="h-fit flex gap-6" onClick={() => { handleDrop3() }}> <img src={dropicon3} />  Do i need to code?</div>
            {drop3 ? <motion.div style={{ color: '#666666' }}

              className={`h-fit px-10 text-lg font-semibold flex items-center ${style.framer2}`}>
              Framer is web builder for creative pros. Be sure to check out framer.com to learn more.
            </motion.div> : null}
          </div>

        </motion.div>



      </div>
      <div id="footer" className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
