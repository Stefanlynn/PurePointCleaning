import React, { useState } from 'react';

export default function SimpleContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="hidden">
      {/* This is a simpler form that matches exactly the hidden form in index.html */}
      <form
        name="contact-simple"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="form-name" value="contact-simple" />
        <p style={{ display: 'none' }}>
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </p>
        
        <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formState.email}
            onChange={handleChange} 
            required
          />
        </div>
        
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message"
            value={formState.message}
            onChange={handleChange} 
            required
          ></textarea>
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
        
        {isSuccess && <p>Thank you for your message!</p>}
        {isError && <p>There was an error submitting the form. Please try again.</p>}
      </form>
    </div>
  );
}