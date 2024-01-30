
// import React, { useState } from 'react';

// const FormComponent = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         occupation: '',
//         whereyouheardaboutus: 'social',
//         bday: '',
//         agreeTerms: true,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform your form submission logic here
//         console.log(formData);
//     };

//     return (
//         <div className='flex items-center justify-center h-screen'>
//             <form onSubmit={handleSubmit} className="w-full max-w-md px-8 py-8 border-black border-2 rounded-md shadow-lg border-opacity-50 hover:border-opacity-100 transition duration-300">
//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Name:
//                         <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-2 border-black p-2 mt-1 rounded-md" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         E-mail:
//                         <input type="mail" name="email" value={formData.email} onChange={handleChange} className="border-2 border-black p-2 mt-1 rounded-md" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Occupation:
//                         <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="border-2 mt-1 border-black p-2 rounded-md" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Where you heard about us?:
//                         <select
//                             name="whereyouheardaboutus"
//                             value={formData.whereyouheardaboutus}
//                             onChange={handleChange}
//                             className="border-2 mt-1 border-black p-2 rounded-md"
//                         >
//                             <option value="social-media">Social Media</option>
//                             <option value="school-college">School/College</option>
//                             <option value="friends">Friends</option>
//                             <option value="other">Other</option>
//                         </select>
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Birth Date:
//                         <input type="date" name="bday" value={formData.bday} onChange={handleChange} className="border-2 border-black p-2 mt-1 rounded-md" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex items-center">
//                         <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mr-2" />
//                         I agree to the terms and conditions
//                     </label>
//                 </div>

//                 <div className="my-6 flex justify-center">
//                     <button type="submit" className="bg-blue-500 text-white p-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-md">
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default FormComponent;


// FormComponent.js
// import React, { useState } from 'react';

// const FormComponent = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         occupation: '',
//         whereyouheardaboutus: 'social',
//         bday: '',
//         agreeTerms: true,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform your form submission logic here
//         console.log(formData);
//     };

//     return (
//         <div className='flex items-center justify-center h-screen'>
//             <form onSubmit={handleSubmit} className="w-full max-w-md px-8 py-8 border-black border-2 rounded-md shadow-lg border-opacity-50 hover:border-opacity-100 transition duration-300 transform hover:scale-101">
//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Name:
//                         <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         E-mail:
//                         <input type="mail" name="email" value={formData.email} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Occupation:
//                         <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Where you heard about us?:
//                         <select
//                             name="whereyouheardaboutus"
//                             value={formData.whereyouheardaboutus}
//                             onChange={handleChange}
//                             className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
//                         >
//                             <option value="social-media">Social Media</option>
//                             <option value="school-college">School/College</option>
//                             <option value="friends">Friends</option>
//                             <option value="other">Other</option>
//                         </select>
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex flex-col">
//                         Birth Date:
//                         <input type="date" name="bday" value={formData.bday} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
//                     </label>
//                 </div>

//                 <div className="my-6">
//                     <label className="block flex items-center">
//                         <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mr-2" />
//                         I agree to the terms and conditions
//                     </label>
//                 </div>

//                 <div className="my-6 flex justify-center">
//                     <button type="submit" className="bg-blue-500 text-white p-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-md">
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default FormComponent;


// FormComponent.js
import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        occupation: '',
        whereyouheardaboutus: 'social',
        bday: '',
        agreeTerms: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your form submission logic here
        console.log(formData);
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleSubmit} className="w-full max-w-md px-8 py-8 border-black border-2 rounded-md shadow-lg border-opacity-50 hover:border-opacity-100 transition duration-300 transform hover:scale-101">
                <div className="my-6">
                    <label className="block flex flex-col">
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex flex-col">
                        E-mail:
                        <input type="mail" name="email" value={formData.email} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex flex-col">
                        Occupation:
                        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex flex-col">
                        Where you heard about us?:
                        <select
                            name="whereyouheardaboutus"
                            value={formData.whereyouheardaboutus}
                            onChange={handleChange}
                            className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                        >
                            <option value="social-media">Social Media</option>
                            <option value="school-college">School/College</option>
                            <option value="friends">Friends</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex flex-col">
                        Birth Date:
                        <input type="date" name="bday" value={formData.bday} onChange={handleChange} className="border-2 border-black p-2 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex items-center">
                        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mr-2" />
                        I agree to the terms and conditions
                    </label>
                </div>

                <div className="my-6 flex justify-center">
                    <button type="submit" className="bg-blue-500 text-white p-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-md">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
