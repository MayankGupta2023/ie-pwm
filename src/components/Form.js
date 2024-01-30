// FormComponent.js
import React, { useState } from 'react';

const FormComponent = ({ setForm }) => {
    const [formData, setFormData] = useState({
        area: '',
        governmentRice: '',
        markedPrice: '',
        tokenPrize: '',
        dueDate: '',
        agreeTerms: false,
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
        setForm(false);

        console.log(formData);
    };

    const close = () => {
        setForm(false);
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mt-4">
                <label className="block">
                    Area:
                    <br />
                    <input type="text" name="area" value={formData.area} onChange={handleChange} className="border p-1" />
                </label>
            </div>

            <div className="mt-4">
                <label className="block">
                    Government Rice:
                    <br />
                    <input type="text" name="governmentRice" value={formData.governmentRice} onChange={handleChange} className="border p-1" />
                </label>
            </div>

            <div className="mt-4">
                <label className="block">
                    Marked Price:
                    <br />
                    <input type="text" name="markedPrice" value={formData.markedPrice} onChange={handleChange} className="border p-1" />
                </label>
            </div>

            <div className="mt-4">
                <label className="block">
                    Token Prize:
                    <br />
                    <input type="text" name="tokenPrize" value={formData.tokenPrize} onChange={handleChange} className="border p-1" />
                </label>
            </div>

            <div className="mt-4">
                <label className="block">
                    Due Date:
                    <br />
                    <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="border p-1" />
                </label>
            </div>

            <div className="mt-4">
                <label className="block">
                    <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mr-2" />
                    I agree to the terms and conditions
                </label>
            </div>

            <div className="mt-4">
                <button type="submit" className="bg-blue-500 text-white p-2 px-3">Submit</button>
                <button onClick={() => { close }} className="bg-red-500 text-white p-2 px-4 ml-4">Close</button>

            </div>
        </form>
    );
};

export default FormComponent;
