"use client"

import React, { useRef, useState } from "react";

function home() {
    const [panFile, setPanFile] = useState(null);
    const [aadharFile, setAadharFile] = useState(null);
    const [error, setError] = useState("");

    // Create refs for the file input fields
    const panInputRef = useRef(null);
    const aadharInputRef = useRef(null);

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setError(""); // Clear any previous error
            if (type === "pan") setPanFile(file);
            else if (type === "aadhar") setAadharFile(file);
        } else {
            setError("Please select a valid image to upload");
            if (type === "pan") setPanFile(null);
            else setAadharFile(null);
        }
    };

    return (
        <div className="space-y-6">
            {/* PAN Card Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Upload PAN Card*</label>
                <div className="relative w-full">
                    <input
                        type="file"
                        ref={panInputRef}
                        onChange={(e) => handleFileChange(e, "pan")}
                        className="hidden" // Hide the actual input
                    />
                    {/* Visible input field showing the selected file name */}
                    <input
                        type="text"
                        value={panFile ? panFile.name : "No file chosen"}
                        readOnly
                        className="w-full border border-gray-300 rounded-md p-2 pr-20"
                    />
                    <button
                        className="absolute top-0 right-0 bg-blue-500 text-white py-2 px-4 rounded-r-md z-10"
                        onClick={() => panInputRef.current.click()} // Trigger file input click
                    >
                        Upload
                    </button>
                </div>
            </div>

            {/* Aadhar Front Side Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Upload Aadhar Front Side Image*</label>
                <div className="relative w-full">
                    <input
                        type="file"
                        ref={aadharInputRef}
                        onChange={(e) => handleFileChange(e, "aadhar")}
                        className="hidden" // Hide the actual input
                    />
                    {/* Visible input field showing the selected file name */}
                    <input
                        type="text"
                        value={aadharFile ? aadharFile.name : "No file chosen"}
                        readOnly
                        className="w-full border border-gray-300 rounded-md p-2 pr-20"
                    />
                    <button
                        className="absolute top-0 right-0 bg-blue-500 text-white py-2 px-4 rounded-r-md z-10"
                        onClick={() => aadharInputRef.current.click()} // Trigger file input click
                    >
                        Upload
                    </button>
                </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
}

export default home;



