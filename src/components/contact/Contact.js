import React, { useState } from 'react';
import { Button, H3 } from '../../globalStyles';
import { Section } from './ContactStyles';

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
      <form onSubmit={submitHandler}>
        <FormField></FormField>
        <Button type='submit'>Send Message</Button>
      </form>
    </Section>
  );
};

export default Contact;
