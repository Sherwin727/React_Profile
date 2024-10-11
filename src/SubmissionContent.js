import React from 'react';

export default function SubmissionContent({ formData }) {
    const { nameSender, emailSender, messageSender } = formData;

    return (
        <div>
            <h2>Form Submission Details:</h2>
            <p><strong>Name:</strong> {nameSender}</p>
            <p><strong>Email:</strong> {emailSender}</p>
            <p><strong>Message:</strong> {messageSender}</p>
        </div>
    );
}
