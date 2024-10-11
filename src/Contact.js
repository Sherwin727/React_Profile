import React, { useState } from "react";
import SubmissionContent from './SubmissionContent';

export default function SubmitForm() {
    const [formData, setFormData] = useState({
        nameSender: '',
        emailSender: '',
        messageSender: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle the form input changes
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    // Handles the form submissions
    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <div>
            <h1 align="center">Contact</h1>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <label for="nameSender">Name:</label>
                    <input 
                        type="text" 
                        name="nameSender" 
                        value={formData.nameSender} 
                        onChange={handleInputChange} 
                    ></input>
                    <br/>

                    <label for="emailSender">Email:</label>
                    <input 
                        type="email" 
                        name="emailSender" 
                        value={formData.emailSender} 
                        onChange={handleInputChange} 
                    ></input>
                    <br/>

                    <label for="messageSender">Your Message:</label>
                    <textarea 
                        id="messageSender" 
                        name="messageSender" 
                        value={formData.messageSender} 
                        onChange={handleInputChange} 
                    ></textarea>
                    <br />

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <SubmissionContent formData={formData} />
            )}
        </div>
    );
}
