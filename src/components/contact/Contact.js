import React, { useState } from 'react';
import { Button, H3 } from '../../globalStyles';
import { FormField, InputField, InputField2, Section } from './ContactStyles';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const submitHandler = () => {
    setName('');
    setEmail('');
    setTitle('');
    setMessage('');
  };
  return (
    <Section>
      <h2>Need a Project?</h2>
      <p style={{ padding: '2rem 1rem' }}>
        Let us know what about your work, Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Asperiores, consectetur?
      </p>
      <FormField>
        <form onSubmit={submitHandler}>
          <InputField
            type='text'
            value={name}
            placeholder='Your Name'
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputField
            type='email'
            value={email}
            placeholder='Your Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            type='text'
            value={title}
            placeholder='Your title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputField2
            type='text'
            value={message}
            placeholder='Your message'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type='submit'>Send Message</Button>
        </form>
      </FormField>
    </Section>
  );
};

export default Contact;
