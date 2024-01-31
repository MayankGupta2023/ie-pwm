// components/Pricing.js

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import MakePaymentComponent from '../components/MakePaymentComponent';
import Footer from '../components/footer';

const cardVariants = {
  initial: { scale: 1, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' },
  hover: {
    scale: 1.05,
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
  backgroundColor: 'white', // Orangish-reddish-yellowish color
};

const Pricing = () => {
  const monthlyPlans = [
    { title: 'Monthly Plan 1', price: 19.99 },
    { title: 'Monthly Plan 2', price: 29.99 },
    { title: 'Monthly Plan 3', price: 39.99 },
  ];

  const yearlyPlans = [
    { title: 'Yearly Plan 1', price: 199.99 },
    { title: 'Yearly Plan 2', price: 249.99 },
    { title: 'Yearly Plan 3', price: 299.99 },
  ];

  return (
    <div className='h-screen  '>
      <div className='h-20'>
        <Navbar />
      </div>
      <div className="flex flex-col items-center py-12 h-screen " style={containerStyle}>
         {/* Catchy Heading */}
         <motion.div
          initial="initial"
          animate="animate"
          variants={headingVariants}
          className="mb-8"
        >
          <h2 className="text-4xl font-semibold text-purple-800 mb-5">
            Explore Our Exciting Pricing Plans
            <motion.span
              style={{ display: 'inline-block' }}
              animate={{ rotate: [0, 360] }}
              transition={headingColorTransition}
            >
              🚀
            </motion.span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {monthlyPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-600"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-purple-600">₹{plan.price}</p>
              </div>
              <MakePaymentComponent amount={plan.price} description={plan.title} />
            </motion.div>
          ))}

          {yearlyPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-600"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-black-600">₹{plan.price}</p>
              </div>
              <MakePaymentComponent amount={plan.price} description={plan.title} />
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Pricing;






