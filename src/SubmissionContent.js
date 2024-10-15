import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export default function SubmissionContent({ formData }) {
    const { nameSender, emailSender, messageSender } = formData;
    const displayName = nameSender ? nameSender : 'User';
    return (
        <div>
            <h2>Thank you for the email, {displayName}</h2>
            <p><strong>Name:</strong> {nameSender}</p>
            <p><strong>Email:</strong> {emailSender}</p>
            <p><strong>Message:</strong> {messageSender}</p>
            <br/>
            <strong><Nav.Link href="/" id="lCol">Exit &nbsp;</Nav.Link></strong>
        </div>
    );
}
