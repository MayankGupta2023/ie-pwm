import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import MakePaymentComponent from '../components/MakePaymentComponent';
import Footer from '../components/footer';
import Switch from 'react-switch';
import '../styles/pricing.module.css'; // Import any additional styles for styling the switch

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
  const [showMonthlyPlans, setShowMonthlyPlans] = useState(true);

  const handleToggleSwitch = () => {
    setShowMonthlyPlans(!showMonthlyPlans);
  };

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

  const selectedPlans = showMonthlyPlans ? monthlyPlans : yearlyPlans;

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='h-20'>
        <Navbar />
      </div>
      <div className="flex-grow ml-10 mr-10 flex flex-col items-center py-12" style={containerStyle}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={headingVariants}
          className="mb-8"
        >
          <h1 className="text-5xl font-semibold text-sky-950 mb-0">
            Explore our Exciting Pricing Plans
            <motion.span
              style={{ display: 'inline-block' }}
              animate={{ rotate: [0, 360] }}
              transition={headingColorTransition}
            >
              🚀
            </motion.span>
          </h1>
        </motion.div>
        <p className='text-xl text-sky-900  text-center mb-8 pl-10  pr-10'>
        Unlock Boundless Possibilities with Our Flexible Pricing Plans.
         Tailored for Every Individual and Needs , Our Plans Provide Unrivaled Value, 
         Ensuring Seamless Access to Premium Features and Unprecedented Learning
          Opportunities.
        </p>

<motion.div className='mb-10 mt-5'
variants={cardVariants}initial="initial"
whileHover="hover">
<div className='pt-2 h-10 bg-teal-950 font-serif rounded-t-2xl text-xl font-bold text-white text-center text-semibold'>
Recommended
</div>
<motion.div >
        <div
             
              //variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white p-8 rounded-b-2xl shadow-md border-2 border-teal-600 border-t-black flex flex-col justify-between w-96 h-96"
            >
              
              <h3 className="text-2xl font-bold text-slate-500 mb-0 flex items-center justify-center">One Time </h3>
              <h3 className="text-3xl font-bold  text-slate-800 mb-0 flex items-center justify-center">$ 2500</h3>
              <hr className="mb-2"></hr>
              <div className="text-gray-900 mb-4">
                <ul className="list-disc list-inside">
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 1</span>
                  </li>
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 2</span>
                  </li>
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 3</span>
                  </li>
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 4</span>
                  </li>
                </ul>
                <div className="mt-6 mb-2 flex items-center justify-center">
                  <MakePaymentComponent amount="2000" description="One Time" />
                </div>
              </div>
            </div>
            </motion.div>
</motion.div>

        <div className="toggle-switch-container mb-12">
          <span className='mr-4 text-3xl'>Yearly</span>
          <Switch
            className="custom-switch"
            onChange={handleToggleSwitch}
            checked={showMonthlyPlans}
            onColor="#047857"
            offColor="#047857"
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
          />
          <span className='ml-2 text-3xl'>Monthly</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-10 flex-grow">
          {selectedPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-md border-2 border-teal-600 flex flex-col justify-between w-80 h-96"
            >
              <h3 className="text-2xl font-bold text-slate-500 mb-0 flex items-center justify-center">{plan.title}</h3>
              <h3 className="text-3xl font-bold  text-slate-800 mb-0 flex items-center justify-center">$ {plan.price}</h3>
              <hr className="mb-2"></hr>
              <div className="text-gray-900 mb-4">
                <ul className="list-disc list-inside">
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 1</span>
                  </li>
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 2</span>
                  </li>
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 3</span>
                  </li>
                  <li style={{ color: '#71717a' }}>
                    <span style={{ color: 'grey' }}>Bullet Point 4</span>
                  </li>
                </ul>
                <div className="mt-6 mb-2 flex items-center justify-center">
                  <MakePaymentComponent amount={plan.price} description={plan.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
