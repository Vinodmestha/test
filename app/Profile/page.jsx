// "use client"

// import React from 'react'
// import { useAuth } from '@/Context/AuthContext';

// export default function profile() {
//     let { user } = useAuth();
//     return (
//         <div className='max-w-screen-xl mx-auto py-20'>
//             <div>
//                 <h4 className='text-3xl'>User Profile</h4>
//                 <h5 className='text-lg pt-5'>User Name : {user?.username}</h5>
//             </div>
//         </div>
//     )
// }
import React, { useState } from "react";

function profile() {
    const [panFile, setPanFile] = useState(null);
    const [aadharFile, setAadharFile] = useState(null);
    const [error, setError] = useState("");

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setError(""); // clear any previous error
            if (type === "pan") setPanFile(file);
            else if (type === "aadhar") setAadharFile(file);
        } else {
            setError("Please select a valid image to upload");
            if (type === "pan") setPanFile(null);
            else setAadharFile(null);
        }
    };

    return (
        <div className="space-y-4">
            {/* PAN Card Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Upload PAN Card*
                </label>
                <div className="flex items-center space-x-4">
                    <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "pan")}
                        className="w-full border border-gray-300 rounded-md p-2"
                        aria-label="Upload PAN Card"
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                        Upload
                    </button>
                </div>
            </div>

            {/* Aadhar Front Side Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Upload Aadhar Front Side Image*
                </label>
                <div className="flex items-center space-x-4">
                    <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "aadhar")}
                        className="w-full border border-gray-300 rounded-md p-2"
                        aria-label="Upload Aadhar Image"
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                        Upload
                    </button>
                </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
}

export default profile;
