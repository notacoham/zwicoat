import React from 'react';
import Wrapper from '../assets/wrappers/ContactPageWrapper';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'ad1bf12b-c3f7-45c9-9552-01ebf43c23d7');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <Wrapper>
      <div className="contact load-fade">
        <form onSubmit={onSubmit}>
          <h2>Contact Us</h2>
          <h3>We’re eager to discuss your ideas.​</h3>
          <div className="input-box">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              id=""
              className="field mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
