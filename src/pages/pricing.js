// components/Pricing.js

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import MakePaymentComponent from '@/components/MakePaymentComponent';

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
  backgroundColor: '#FFA07A', // Orangish-reddish-yellowish color
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
    <div>
      <div className='h-20'>
        <Navbar />
      </div>
      <div className="flex justify-center pt-12" style={containerStyle}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-2xl font-bold text-purple-600">${plan.price}</p>
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
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
              <div className="mt-4">
                <p className="text-2xl font-bold text-purple-600">${plan.price}</p>
              </div>
              <MakePaymentComponent amount={plan.price} description={plan.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;






