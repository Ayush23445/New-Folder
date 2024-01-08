import React, { useState } from 'react'

const LoginForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
        status: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate password and confirm password
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // You can now save the form data, for example, by sending it to a server

        console.log('Form data submitted:', formData);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-md shadow-xl">

            <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-2 mb-4 items-center">

                    <label htmlFor="firstName" className="block  text-sm font-medium text-gray-600">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-[100%] border rounded-md"
                        required
                    />
                </div>
                <div className="grid grid-cols-2  mb-4 items-center">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-full border rounded-md"
                        required
                    />
                </div>


                <div className="grid grid-cols-2  mb-4 items-center">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="grid grid-cols-2  mb-4 items-center">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                        Phone:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="grid grid-cols-2  mb-4 items-center">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-600">
                        Role:
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="grid grid-cols-2  mb-4 items-center">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-600">
                        Status:
                    </label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="grid grid-cols-2  mb-4 items-center">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="grid grid-cols-2  mb-4 items-center">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="mt-1 p-1 w-full border rounded-md"
                        required
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm