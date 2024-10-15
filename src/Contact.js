import React, { useState } from "react"; 
import SubmissionContent from './SubmissionContent';
import Button from 'react-bootstrap/Button';
import './App.css';

function SubmitForm() {
    const [formData, setFormData] = useState({
        nameSender: '', 
        emailSender: '', 
        messageSender: '' 
    });
    // State to check if the form has been submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Function to handle the changes made to the form's input fields
    function handleInputChange(event) {
        const { name, value } = event.target; // using the name and value from the input field
        setFormData((prevData) => ({
            ...prevData, // Keeping previous data intact for the text-field to work
            [name]: value, //Updates the current field based on the 'name' attribute
        }));
    }
    // Function to handle form submission
    function handleSubmit(event) {
        setIsSubmitted(true); // Sets the state to true,to indicate the form has been submitted
    }
    return (
        <div>
            <div id="formDiv">
            <h1 align="center" align="center">Contact</h1> 
            {/* Conditional rendering: if the form is not submitted, show the form, otherwise show SubmissionContent */}
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}> {/* The Form element with an onSubmit handler */}
                    <strong><label for="nameSender">Name:   </label></strong>
                    <br/>
                    <input 
                        type="text" 
                        name="nameSender" 
                        class="nameSenderCss"
                        value={formData.nameSender} 
                        onChange={handleInputChange}
                        required
                    />
                    <br/>
                    <strong><label for="emailSender">Email: </label></strong>
                    <br/>
                    <input 
                        type="email" 
                        name="emailSender" 
                        class="emailSenderCss"
                        value={formData.emailSender} 
                        onChange={handleInputChange}
                        required
                    />
                    <br/>
                    <strong><label for="messageSender">Your Message:</label></strong>
                    <br/>
                    <textarea 
                        rows="5" cols="25"
                        id="messageSender" 
                        name="messageSender" 
                        class="messageSender"
                        value={formData.messageSender} 
                        onChange={handleInputChange} 
                        required
                    />
                    <br/>
                    <Button type="Submit">Submit</Button>
                </form>
            ) : (
                /* If the form is submitted, display the
                SubmissionContent component with the form data
                passed as a prop */
                <SubmissionContent formData={formData} />
            )}
            </div>
        </div>
    );
}
export default SubmitForm; 
