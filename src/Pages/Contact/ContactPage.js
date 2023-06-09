import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
      </div>
      <div >
        <input
          type="email"
          placeholder="Email"
          name="email"
           required
        />
      </div>
      <div  >
        <textarea
          placeholder="Your message"
          name="message"
           required
        />
      </div>
      <div >
        <button 
           type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactPage;