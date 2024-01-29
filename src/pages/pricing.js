// components/Pricing.js

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';

const cardVariants = {
  initial: { scale: 1, boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)' },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const redirectToPaymentGateway = () => {
  // Replace 'https://dummy-payment-gateway.com' with the URL of your dummy payment gateway
  window.location.href = 'https://dummy-payment-gateway.com';
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
  backgroundColor: '#FFA07A', // Orangish-reddish-yellowish color
};

const Pricing = () => {
  const monthlyPlans = [
    { title: 'Monthly Plan 1', price: '$19.99' },
    { title: 'Monthly Plan 2', price: '$29.99' },
    { title: 'Monthly Plan 3', price: '$39.99' },
  ];

  const yearlyPlans = [
    { title: 'Yearly Plan 1', price: '$199.99' },
    { title: 'Yearly Plan 2', price: '$249.99' },
    { title: 'Yearly Plan 3', price: '$299.99' },
  ];

  return (
    <div>
      <div className='h-20'>
        <Navbar />
      </div>
      <div className="flex justify-center pt-12" style={containerStyle}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <motion.div
            initial="initial"
            animate="animate"
            variants={headingVariants}
            className="col-span-full mb-8"
          >
            <h2 className="text-2xl font-semibold text-orange ml-32">
              <motion.span
                style={{ display: 'inline-block' }}
                animate={{ rotate: [0, 360] }}
                transition={headingColorTransition}
              >
                🌈
              </motion.span>
              {' '}Below are pricing Plans for School Students{' '}
              <motion.span
                style={{ display: 'inline-block' }}
                animate={{ rotate: [0, 360] }}
                transition={headingColorTransition}
              >
                🌈
              </motion.span>
            </h2>
          </motion.div> */}

          {/* One-time */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="col-span-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-4">One-Time Purchase</h3>
            <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet...</p>
            <div className="mt-4">
              {/* Add one-time pricing details */}
              <p className="text-2xl font-bold text-purple-600">$99</p>
            </div>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="bg-purple-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300"
              onClick={redirectToPaymentGateway}
            >
              Purchase Now
            </motion.button>
          </motion.div>

          {/* Monthly Subscription Cards */}
          {monthlyPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
              <div className="mt-4">
                {/* Add monthly pricing details */}
                <p className="text-2xl font-bold text-purple-600">{plan.price}</p>
              </div>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="bg-purple-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300"
                onClick={redirectToPaymentGateway}
              >
                Purchase Now
              </motion.button>
            </motion.div>
          ))}

          {/* Yearly Subscription Cards */}
          {yearlyPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white p-6 rounded-lg shadow-md"
              onClick={redirectToPaymentGateway}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
              <div className="mt-4">
                {/* Add yearly pricing details */}
                <p className="text-2xl font-bold text-purple-600">{plan.price}</p>
              </div>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="bg-purple-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Purchase Now
              </motion.button>
            </motion.div>
          ))}

          {/* Additional One-Time Purchase Card (covering entire row) */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="col-span-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-4">One-Time Purchase for college students</h3>
            <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet...</p>
            <div className="mt-4">
              {/* Add one-time pricing details */}
              <p className="text-2xl font-bold text-purple-600">$99</p>
            </div>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="bg-purple-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300"
              onClick={redirectToPaymentGateway}
            >
              Purchase Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
