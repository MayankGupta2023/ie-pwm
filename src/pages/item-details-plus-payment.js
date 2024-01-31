// pages/TwoColumnLayout.js

import React from 'react';
import MakePaymentComponent from '../components/MakePaymentComponent';

const TwoColumnLayout = () => {
  return (
    <div className="flex">
      {/* Left Side (60%) */}
      <div className="w-3/5 bg-blue-500 h-screen">
        {/* Your content for the left side */}
        <p className="text-white">Left Side (60%)</p>
<h1>Item Details</h1>
    <p>   
"Digital Marketing Mastery: Boost Your Online Presence"

In the fast-paced digital landscape, mastering the art of online promotion is essential for individuals and businesses alike. The comprehensive course, "Digital Marketing Mastery: Boost Your Online Presence," provides a dynamic and up-to-date exploration of the key strategies and tools required to thrive in the digital realm.

Covering a wide array of topics, this course delves into the intricacies of search engine optimization (SEO), social media marketing, content creation, and email campaigns. Participants will gain invaluable insights into building an effective online presence, engaging with target audiences, and leveraging analytics to refine marketing strategies.</p>
      </div>

      {/* Right Side (40%) */}
      <div className="w-2/5 bg-gray-300 h-screen">
        {/* Your content for the right side */}
        <p>Right Side (40%)</p>
      
      </div>
    </div>
  );
};

export default TwoColumnLayout;
